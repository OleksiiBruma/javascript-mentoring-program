import React from "react";
import CourseList from "../../components/CourseList";
import Search from "../../components/Search";
import { Grid } from "@material-ui/core";

 const CoursesPage = () => (
  <Grid container item justify={"center"} spacing={2}>
    <Grid item>
      <Search />
    </Grid>
    <Grid item>
      <CourseList />
    </Grid>
  </Grid>
);

export default  CoursesPage