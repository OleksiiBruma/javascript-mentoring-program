import React, { useEffect } from "react";
import Search from "../../components/Search";
import CoursesList from "../../components/CoursesList"
import { Grid } from "@material-ui/core";
const CoursesPage = ({ loadCourses, deleteCourse, courses }) => {
  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  const coursesToShow = courses.filtered ? courses.visible : courses.all;
  return (
    <Grid container justify={"center"} spacing={2}>
      <Grid item container xs={12} justify={"center"}>
        <Search />
      </Grid>
      <Grid container item xs={12} spacing={2}>
        <CoursesList courses={coursesToShow} deleteCourse={deleteCourse} />
      </Grid>
    </Grid>
  );
};

export default CoursesPage;
