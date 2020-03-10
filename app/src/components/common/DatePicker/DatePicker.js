import "date-fns";
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const DatePicker = ({ handleChange, value }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date"
          value={value}
          onChange={handleChange}
          KeyboardButtonProps={{
            "aria-label": "Set date"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

DatePicker.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date)
};

export default DatePicker;
