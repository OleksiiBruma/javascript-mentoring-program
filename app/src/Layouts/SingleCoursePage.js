import React, { Component } from "react";
import Input from "../components/common/Input";
import TransferList from "../components/TransferList";
import DatePicker from "../components/DatePicker";
import { Save, Cancel } from "@material-ui/icons";
import { Grid, Typography, Button } from "@material-ui/core";
import { timeConvert } from "../utils";

class SingleCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: {
        name: "Name",
        error: false,
        errorText: "Please fill in the name",
        value: "name value",
        type: "text"
      },
      descriptionInput: {
        name: "Description",
        error: false,
        errorText: "Please fill in the description",
        value: "description value",
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
        formattedValue: "",
        type: "number"
      },
      authorsInput: ["author 1", "author 2"]
    };
  }

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
  changeDurationInput = e => {
    this.setState({
      durationInput: {
        ...this.state.durationInput,
        value: e.target.value,
        formattedValue: timeConvert(e.target.value)
      }
    });
  };
  changeDateInput = newValue => {
    this.setState({ dateInput: { value: newValue } });
  };
  render = () => (
    <Grid container justify={"center"}>
      <Grid
        container
        item
        xs={5}
        item
        direction="column"
        spacing={0}
        alignItems={"flex-start"}
      >
        <Grid item>
          <Input
            inputData={this.state.nameInput}
            handleChange={this.changeNameInput}
          />
        </Grid>
        <Grid item>
          <Input
            inputData={this.state.descriptionInput}
            handleChange={this.changeDescriptionInput}
          />
        </Grid>
        <Grid item container alignItems={"center"}>
          <Grid item xs={1}>
            <Input
              inputData={this.state.durationInput}
              handleChange={this.changeDurationInput}
            />
          </Grid>
          <Grid item>
            <Typography>{this.state.durationInput.formattedValue}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <DatePicker
            value={this.state.dateInput.value}
            handleChange={this.changeDateInput}
          />
        </Grid>
        <Grid item>
          <TransferList list={this.state.authorsInput} />
        </Grid>
      </Grid>
      <Grid container justify={"center"} spacing={5}>
        <Grid item>
          <Button
            variant="contained"
            title={"save"}
            color="primary"
            size="large"
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
          >
            <Cancel fontSize="small" /> Cancel
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SingleCoursePage;
