import React, { Component } from "react";
import Input from "../../components/common/Input";
import TransferList from "../../components/TransferList";
import DatePicker from "../../components/DatePicker";
import { Save, Cancel } from "@material-ui/icons";
import { Grid, Typography, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import MinutesToHours from "../../components/common/MinutesToHours";
import CoursesService from "../../services/CoursesService";

class SingleCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showError: false,
      nameInput: {
        name: "Name",
        error: false,
        errorText: "Please fill in the name",
        value: "",
        type: "text"
      },
      descriptionInput: {
        name: "Description",
        error: false,
        errorText: "Please fill in the description",
        value: "",
        multiline: true,
        rows: 4,
        type: "text",
        variant: "outlined"
      },
      dateInput: {
        value: new Date()
      },
      durationInput: {
        name: "Duration",
        error: false,
        errorText: "Please fill in duration",
        value: 0,
        type: "number"
      },
      authorsInput: ["author 1", "author 2"]
    };
  }
  getAuthors = async () => {
    const authors = await CoursesService.getAuthors().catch(err => {
      this.setState({
        message: err
      });
    });
    if (authors) {
     return authors
    }
  };

  changeNameInput = e => {
    this.setState({
      nameInput: { ...this.state.nameInput, value: e.target.value }
    });
  };
  changeDescriptionInput = e => {
    this.setState({
      descriptionInput: {
        ...this.state.descriptionInput,
        value: e.target.value
      }
    });
  };
  changeDurationInput = ({ target: { value } }) => {
    if (value < 0) {
      return;
    }
    this.setState({
      durationInput: {
        ...this.state.durationInput,
        value
      }
    });
  };
  changeDateInput = newValue => {
    this.setState({ dateInput: { value: newValue } });
  };
  addCourse = async e => {
    const { history } = this.props;
    e.preventDefault();
    if (!this.isFormValid()) {
      return;
    }
    const {
      nameInput: { value: nameValue },
      descriptionInput: { value: descriptionValue },
      dateInput: { value: dateValue },
      durationInput: { value: durationValue },
      authorsInput
    } = this.state;
    const body = {
      name: nameValue,
      description: descriptionValue,
      date: dateValue,
      duration: durationValue,
      authors: authorsInput
    };
    const newCourse = await CoursesService.addCourse(body).catch(err => {
      this.setState({
        message: err
      });
    });
    if(newCourse){
      history.push("/courses");
    }
  };
  isFormValid = () => {
    const {
      nameInput,
      descriptionInput,
      durationInput,
      authorsInput
    } = this.state;

    const status =
      nameInput.value !== "" &&
      descriptionInput.value !== "" &&
      durationInput.value > 0 &&
      authorsInput.length;

    this.setState({
      showError: !status
    });
    return status;
  };
  onCancel = e => {
    e.preventDefault();
    const { history } = this.props;
    history.push("/courses");
  };
  updateAuthors = value => {
    this.setState({
      authorsInput: value
    });
  };
  render = () => (
    <form>
      <Grid container justify={"center"}>
        <Grid
          container
          item
          xs={5}
          direction="column"
          spacing={0}
          alignItems={"flex-start"}
        >
          {this.state.showError && (
            <Alert variant="outlined" severity="error">
              {"Please fill in all fields"}
            </Alert>
          )}
          <Grid item>
            <Input
              inputData={this.state.nameInput}
              handleChange={this.changeNameInput}
              handleBlur={() => {}}
            />
          </Grid>
          <Grid item>
            <Input
              inputData={this.state.descriptionInput}
              handleChange={this.changeDescriptionInput}
              handleBlur={() => {}}
            />
          </Grid>
          <Grid item container alignItems={"center"}>
            <Grid item xs={2}>
              <Input
                inputData={this.state.durationInput}
                handleChange={this.changeDurationInput}
                handleBlur={() => {}}
              />
            </Grid>
            <Grid item>
              <MinutesToHours
                render={convert => (
                  <Typography>
                    {convert(this.state.durationInput.value)}
                  </Typography>
                )}
              />
            </Grid>
          </Grid>
          <Grid item>
            <DatePicker
              value={this.state.dateInput.value}
              handleChange={this.changeDateInput}
              handleBlur={() => {}}
            />
          </Grid>
          <Grid item>
            <TransferList
              list={this.state.authorsList}
              handleChange={this.updateAuthors}
              getAuthors = {this.getAuthors}
            />
          </Grid>
        </Grid>
        <Grid container justify={"center"} spacing={5}>
          <Grid item>
            <Button
              variant="contained"
              title={"save"}
              color="primary"
              size="large"
              onClick={e => this.addCourse(e, this.props.history)}
            >
              <Save fontSize="small" /> Save
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              title={"cancel"}
              color="secondary"
              size="large"
              onClick={this.onCancel}
            >
              <Cancel fontSize="small" /> Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default SingleCoursePage;
