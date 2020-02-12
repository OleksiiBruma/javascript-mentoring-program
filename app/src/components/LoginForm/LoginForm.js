import React, { Component } from "react";
import { Button, Paper, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Input from "../common/Input";
import { isLatinLettersAndDigits, isLatinLetters } from "../../utils";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitDisabled:true,
      isFormValid: true,
      inputs: [
        {
          name: "login",
          value: "",
          error: false,
          emptyText: `empty`,
          incorrectText: `incorrect`,
          errorText: ``,
          type: "text"
        },
        {
          name: "password",
          value: "",
          error: false,
          emptyText: `empty`,
          incorrectText: `incorrect`,
          errorText: ``,
          type: "password"
        }
      ]
    };
  }

  validateField = ({name, value}) => {
    switch (name){
      case "login":
       return isLatinLetters(value)
      case "password":
       return isLatinLettersAndDigits(value)
    }
  };
  submitDisabledChange = () => {
    this.setState({
      isSubmitDisabled : this.state.inputs[0].error || this.state.inputs[1].error
    }
    )
  }

  handleBlur = ({target: {name, value}}) => {
    this.setState({
      inputs: [...this.state.inputs.map(input => {
        if(input.name === name && value === ""){
          return { ...input, error: true, errorText: input.emptyText  }
        }
        else if (input.name === name && !this.validateField({name, value})){
          return { ...input, error: true, errorText: input.incorrectText } 
        }
        else if (input.name === name) {
          return { ...input, error: false }
        }
        else {
          return { ...input }
        }
      })]
    },this.submitDisabledChange
    );
  };

  handleChange = ({target:{name, value}}) => {
    this.setState({
      inputs: [...this.state.inputs.map(input => input.name === name ? { ...input, value} : { ...input })]});
  };

  render = () => (
    <Paper>
      <form noValidate>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item container justify="center">
            {!this.state.isFormValid && (
              <Alert variant="outlined" severity="error">
                Incorrect login or password
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
            {this.state.inputs.map(inputData => (
              <Input
                inputData={inputData}
                key={inputData.name}
                handleChange={this.handleChange}
                handleBlur={this.handleBlur}
              />
            ))}
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
