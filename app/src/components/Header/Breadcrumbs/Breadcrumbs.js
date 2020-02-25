import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Breadcrumbs, Typography } from "@material-ui/core";
const CustomBreadcrumbs = ({currentCourseName}) => {
  return (
    <Breadcrumbs color="inherit" aria-label="breadcrumb">
      <Link to="/courses" color="inherit">
        <Typography>courses</Typography>
      </Link>
      {currentCourseName && <Typography>{currentCourseName}</Typography>}
    </Breadcrumbs>
  );
};
CustomBreadcrumbs.propTypes = {
  currentCourse: PropTypes.string
};
export default CustomBreadcrumbs;
