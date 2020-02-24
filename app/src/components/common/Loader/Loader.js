import React from "react";
import { LinearProgress } from "@material-ui/core";

export const Loader = (props) => {
  return props.isLoading ? <LinearProgress /> : null;
};
