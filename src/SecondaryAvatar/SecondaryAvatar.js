import React, { PropTypes } from "react";
import Avatar from '../Avatar/Avatar';
import styled from 'styled-components';

const SecondaryAvatarStyle = styled(Avatar)`
    background-color: red;
`;


/**
 * Avatar component creates a circular area where an image, letter or icon/glyphicon can be presented. Great for user profiles and lists.
 *
 * **NOTE**: children will always take precedence over props passed into component.
 */
export default class SecondaryAvatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SecondaryAvatarStyle {...this.props}>{this.props.children}</SecondaryAvatarStyle>
    );
  }
}

SecondaryAvatar.propTypes = {
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
