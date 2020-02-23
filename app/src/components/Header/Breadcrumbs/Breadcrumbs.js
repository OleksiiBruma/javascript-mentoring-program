import React from "react";
import PropTypes from "prop-types"
import { Link, useLocation} from "react-router-dom"
import { Breadcrumbs, Typography } from "@material-ui/core";
const CustomBreadcrumbs = () => {
  let location = useLocation();
  const newCourse =  location.pathname === "/courses/new" ? true : false;
return (
  <Breadcrumbs color="inherit" aria-label="breadcrumb">
    <Link to="/courses" color="inherit">
      <Typography>Courses</Typography>
    </Link>
    {newCourse && <Typography>{`course new`}</Typography>}
  </Breadcrumbs>
)};
CustomBreadcrumbs.propTypes = {
    currentCourse: PropTypes.string
}
export default CustomBreadcrumbs;
