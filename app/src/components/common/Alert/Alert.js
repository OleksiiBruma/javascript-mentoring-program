import React from "react";
import { Alert as MUIAlert } from "@material-ui/lab";

export const Alert = ({ errorMessage }) => {
  return (
    errorMessage && (
      <MUIAlert variant="outlined" severity="error">
        {errorMessage}
      </MUIAlert>
    )
  );
};
