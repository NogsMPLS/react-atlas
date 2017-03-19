import React, { PropTypes } from "react";
import { ThemeProvider } from 'styled-components';

const theme = {
  main: 'blue',
};


/**
 * A 'Blue Theme' that just sends a Theme object down to children.
 *
 */
export default class BlueMainTheme extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
