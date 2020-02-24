import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import Alert from "../common/Alert";
import Input from "../common/Input";
import { isLatinLettersAndDigits, isLatinLetters } from "../../utils";

const LoginForm = props => {
  const [login, setLogin] = useState({
    name: "login",
    value: "",
    error: false,
    emptyText: `required`,
    incorrectText: `incorrect login`,
    errorText: ``,
    type: "text"
  });

  const [password, setPassword] = useState({
    name: "password",
    value: "",
    error: false,
    emptyText: `required`,
    incorrectText: `incorrect password`,
    errorText: ``,
    type: "password"
  });
  const validateField = ({ name, value }) => {
    switch (name) {
      case "login":
        return isLatinLetters(value);
      case "password":
        return isLatinLettersAndDigits(value);
      default:
        return;
    }
  };

  const handleBlur = ({ target: { name, value } }) => {
    const setNewValue = name === "login" ? setLogin : setPassword;
    setNewValue(prevState => {
      if (value === "") {
        return {
          ...prevState,
          error: true,
          errorText: prevState.emptyText
        };
      } else if (!validateField({ name, value })) {
        return {
          ...prevState,
          error: true,
          errorText: prevState.incorrectText
        };
      } else {
        return { ...prevState, error: false };
      }
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    const setNewValue = name === "login" ? setLogin : setPassword;
    setNewValue(prevState => ({ ...prevState, value }));
  };

  const authHandler = async e => {
    e.preventDefault();
    const { history } = props;
    const credentials = { login: login.value, password: password.value };
    props.login({ credentials, history });
  };
  const isButtonDisabled =
    !login.value || !password.value || login.error || password.error;
  return (
    <form onSubmit={authHandler} noValidate>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item container justify="center">
          <Alert />
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
            inputData={login}
            key={login.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <Input
            inputData={password}
            key={password.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            disabled={isButtonDisabled}
          >
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
