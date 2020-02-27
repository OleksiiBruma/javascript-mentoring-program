import React from "react";
import { LinearProgress } from "@material-ui/core";

export const Loader = (props) => {
    const completed = 100;
  return props.isLoading ? <LinearProgress /> : <LinearProgress variant="determinate" value={completed}/>;
};
