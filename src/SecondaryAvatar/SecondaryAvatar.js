import React, { PropTypes } from "react";
import Avatar from '../Avatar/Avatar';
import styled from 'styled-components';

const SecondaryAvatarStyle = styled(Avatar)`
    background-color:  ${({theme}) => theme.secondary ? theme.secondary : 'red'};
`;


/**
 * A 'Seconday Avatar' component that wraps the regular 'Avatar' component, but just has a different background color to show 1 possible way of themeing.
 *
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
