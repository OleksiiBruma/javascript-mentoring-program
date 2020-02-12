import React from "react";
import PropTypes from "prop-types"

import { Breadcrumbs, Typography, Link } from "@material-ui/core";
const CustomBreadcrumbs = ({currentCourse}) => (
  <Breadcrumbs color="inherit" aria-label="breadcrumb">
    <Link color="inherit" href="/">
      <Typography>Courses</Typography>
    </Link>
    <Typography>{currentCourse}</Typography>
  </Breadcrumbs>
);
CustomBreadcrumbs.propTypes = {
    currentCourse: PropTypes.string
}
export default CustomBreadcrumbs;
