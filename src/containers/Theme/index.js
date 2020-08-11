import React from "react";
import {DefaultTheme, ThemeProvider} from "atomize";

const theme = {
  ...DefaultTheme,
  fontFamily: {
    ...DefaultTheme.fontFamily,
    primary: `'Lato', sans-serif;`,
  }
};

class Theme extends React.Component {
  render() {
    (<ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>)
  }
}
