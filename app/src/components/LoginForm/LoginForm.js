import React, { Component } from "react";
import { Button, Paper, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Input from "../common/Input";
import { isLatinLettersAndDigits, isLatinLetters } from "../../utils";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitDisabled: true,
      alert: {
        show: false,
        message: ""
      },
      login: {
        name: "login",
        value: "",
        error: false,
        emptyText: `empty`,
        incorrectText: `incorrect`,
        errorText: ``,
        type: "text"
      },
      password: {
        name: "password",
        value: "",
        error: false,
        emptyText: `empty`,
        incorrectText: `incorrect`,
        errorText: ``,
        type: "password"
      }
    };
  }

  validateField = ({ name, value }) => {
    switch (name) {
      case "login":
        return isLatinLetters(value);
      case "password":
        return isLatinLettersAndDigits(value);
      default:
        return;
    }
  };
  submitDisabledChange = () => {
    this.setState({
      isSubmitDisabled: this.state.login.error || this.state.password.error
    });
  };

  handleBlur = ({ target: { name, value } }) => {
    this.setState(prevState => {
      if (value === "") {
        return {
          [name]: {
            ...prevState[name],
            error: true,
            errorText: prevState[name].emptyText
          }
        };
      } else if (!this.validateField({ name, value })) {
        return {
          [name]: {
            ...prevState[name],
            error: true,
            errorText: prevState[name].incorrectText
          }
        };
      } else {
        return { [name]: { ...prevState[name], error: false } };
      }
    }, this.submitDisabledChange);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: { ...this.state[name], value }
    });
  };

  authHandler = async e => {
    e.preventDefault();
    const { history, authContext } = this.props;
    this.hideAlertMessage();
    authContext
      .authenticate({
        login: this.state.login.value,
        password: this.state.password.value
      })
      .then(() => history.push("/courses"))
      .catch(err => {
        this.showAlertMessage(err.message);
        return;
      });
  };
  hideAlertMessage() {
    this.setState({
      alert: {
        show: false
      }
    });
  }
  showAlertMessage(message) {
    this.setState({
      alert: {
        show: true,
        message
      }
    });
  }

  render = () => (
    <Paper>
      <form onSubmit={this.authHandler} noValidate>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item container justify="center">
            {this.state.alert.show && (
              <Alert variant="outlined" severity="error">
                {this.state.alert.message}
              </Alert>
            )}
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            item
            xs={3}
            spacing={0}
          >
            <Input
              inputData={this.state.login}
              key={this.state.login.name}
              handleChange={this.handleChange}
              handleBlur={this.handleBlur}
            />
            <Input
              inputData={this.state.password}
              key={this.state.password.name}
              handleChange={this.handleChange}
              handleBlur={this.handleBlur}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              disabled={this.state.isSubmitDisabled}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default LoginForm;
