import React from "react";
import PropType from "prop-types"
import { FitnessCenterRounded } from "@material-ui/icons";

export const Logo = ({ fontSize }) => {
  return (
    <span>
      <FitnessCenterRounded fontSize={fontSize} />
    </span>
  );
};

Logo.propType = {
  fontSize : PropType.string.isRequired
}
