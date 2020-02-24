import React from "react"
import { Grid, Typography } from "@material-ui/core"
import CourseItem from "../CourseItem"

export const CoursesList = ({courses,deleteCourse})=> courses.length ? (
    courses.map(course => (
      <Grid key={course.id} item xs={12}>
        <CourseItem
          course={course}
          handlerClick={() => deleteCourse(course.id)}
        />
      </Grid>
    ))
  ) : (
    <Grid item container justify={"center"} xs={12}>
      <Typography>{"Nothing to show :("}</Typography>
    </Grid>
  );