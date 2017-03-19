import React, { PropTypes } from "react";
import styled from 'styled-components';

const AvatarContainer = styled.div`
  border-radius: 50%;
  background-color: #aaa;
  color: #fff;
  position: relative;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  width: 3rem;
  height: 3rem;
  font-size: 2.4rem;
  > svg {
    width: 2rem;
    height: 3rem;
    line-height: 3rem;
    fill: currentColor;
  }
  > i {
    width: 2rem;
    height: 3rem;
    line-height: 3rem;
    fill: currentColor;
  }
  > img {
    max-width: 100%;
  }
`;

const Letter = styled.span`
  display: block;
  width: 100%;
  line-height: 3rem;
`;

const Image = styled.img`
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;


/**
 * Avatar component creates a circular area where an image, letter or icon/glyphicon can be presented. Great for user profiles and lists.
 *
 * **NOTE**: children will always take precedence over props passed into component.
 */
export default class Avatar extends React.Component {
  constructor(props) {
    super(props);

    let image;

    if (typeof props.image === "undefined") {
      if (typeof props.defaultImage === "undefined") {
        image = null;
      } else {
        image = props.defaultImage;
      }
    } else {
      image = props.image;
    }

    this.state = { "image": image };
  }

  handleBadImage() {
    /* If the default Image is equal to the bad image URL or the default image is undefined
        set this.state.image as null so avatar will fallback on a different prop. */
    if (
      this.props.defaultImage === this.state.image ||
        typeof this.props.defaultImage === "undefined"
    ) {
      this.setState({ "image": null });
      return;
    }

    this.setState({ "image": this.props.defaultImage });
  }

  render() {
    let { children, icon, title } = this.props;
    let kids = children;
    if (React.Children.count(children) === 1 && typeof children === "string") {
      kids = <Letter className="ra_avatar_letter">{children[0]}</Letter>;
    }

    let avatar = null;
    let image = this.state.image;

    if (typeof image === "string") {
      avatar = 
        <Image
          src={image}
          title={title}
          onError={this.handleBadImage.bind(this)}
          className="ra_avatar_image"
        />
      ;
    } else if (image) {
      avatar = image;
    } else if (icon) {
      avatar = icon;
    } else if (title) {
      avatar = <Letter className="ra_avatar_letter">{title[0]}</Letter>;
    }

    return (
      <AvatarContainer className="ra_avatar_container" style={this.props.style}>
        {kids}
        {avatar}
      </AvatarContainer>
    );
  }
}

Avatar.propTypes = {
  /**
    * Children should be either a string, an icon/glyphicon, or an image tag.
    * @examples "SomeName", <SomeIcon />, <img src="/path/to/image.jpg"/>
    */
  "children": PropTypes.node,
  /**
    * A css class name that will be appended to the wrapping div around the avatar.
    */
  "className": PropTypes.string,
  /**
    * For displaying an icon/glphyicon. Normally these will be another component or an element with a class on it.
    * @examples <GithubIcon />, <i class="fa fa-github"></i>
    */
  "icon": PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
    * Path to an image
    * @examples "http://path.to/an/image.jpg"
    */
  "image": PropTypes.string,
  /**
    * A string. Avatar will use First letter of the string.
    * @examples "Nathan" will output "N"
    */
  "title": PropTypes.string,
  /**
    * A URL to a image that is displayed when the main image fails to load.
    */
  "defaultImage": PropTypes.string
};
