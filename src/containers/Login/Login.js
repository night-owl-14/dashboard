import React from "react";
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  DefaultTheme,
  Div,
  Icon,
  Input,
  Label,
  StyleReset,
  Text,
  ThemeProvider
} from "atomize";

import "./Login.css";

const theme = {
  ...DefaultTheme,
  fontFamily: {
    ...DefaultTheme.fontFamily,
    primary: `'Lato', sans-serif;`,
  }
};

class Login extends React.Component {

  state = {
    isPasswordVisible: false,
    isRememberMeChecked: false
  };

  togglePasswordVisibility = () => {
    this.setState({isPasswordVisible: !this.state.isPasswordVisible});
  };

  toggleRememberMe = () => {
    this.setState({isRememberMeChecked: !this.state.isRememberMeChecked});
  };

  login = () => {

  };

  render() {
    const {isPasswordVisible, isRememberMeChecked} = this.state;
    return (<ThemeProvider theme={theme}>
      <StyleReset/>

      <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
          rel="stylesheet"
      />
      <Container>
        <Div bg="white" shadow="4" rounded="xl" m={{b: "1rem"}} p="1.5rem" w="50%">
          <Text
              tag="h1"
              textSize="subheader"
              m={{t: "3rem"}}
              textAlign="center"
          >
            Sign in
          </Text>
          <Div d="flex" flexDir="column" align="center" w="50%" m="0 auto">
            <form className="form-signin" onSubmit={this.login()} style={{width: "100%"}}>
              <Input
                  placeholder="Email"
                  m={{t: "1.5rem"}}
                  suffix={
                    <Button
                        type="button"
                        pos="absolute"
                        bg="transparent"
                        w="3rem"
                        top="0"
                        right="0"
                        rounded={{r: "md"}}
                    >
                      <Icon name="User"
                            color="success800"
                            size="16px"
                      />
                    </Button>
                  }
              />
              <Input
                  m={{t: "1rem"}}
                  placeholder="Password"
                  type={isPasswordVisible ? "text" : "password"}
                  suffix={
                    <Button
                        type="button"
                        pos="absolute"
                        onClick={() => this.togglePasswordVisibility(!isPasswordVisible)}
                        bg="transparent"
                        w="3rem"
                        top="0"
                        right="0"
                        rounded={{r: "md"}}
                    >
                      <Icon
                          name={isPasswordVisible ? "EyeSolid" : "Eye"}
                          color={isPasswordVisible ? "danger800" : "success800"}
                          size="16px"
                      />
                    </Button>
                  }
              />
              <Div d="flex" align="center" m={{t: "1rem"}}>
                <Div d="flex" flexGrow="1">
                  <Button bg="info700" type="submit">
                    Sign in
                  </Button>
                </Div>
                <Label align="center" textWeight="600">
                  <Checkbox
                      onChange={() => this.toggleRememberMe(!isRememberMeChecked)}
                      checked={isRememberMeChecked}
                      inactiveColor="success400"
                      activeColor="success700"
                      size="24px"
                  />
                  Remember Me
                </Label>
              </Div>
            </form>
            <Div m={{t: "3rem"}} textAlign="center">
              <Anchor href="#" d="block">
                Need help?{" "}
              </Anchor>
              <Anchor href="#" d="block" m=".2rem">
                Create an account{" "}
              </Anchor>
            </Div>
          </Div>
        </Div>
      </Container>
    </ThemeProvider>);
  }
}

export default Login;
