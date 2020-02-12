import React, { Component } from "react";
import CourseItem from "../CourseItem";
import { Grid } from "@material-ui/core";

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          name: "Course 1",
          duration: "14 minutes",
          date: "4 march",
          description:
            "Deserunt id aliqua deserunt reprehenderit sint occaecat mollit Lorem velit aliquip est.",
          authors: ['author1', 'author2']
        },
        {
          id: 2,
          name: "Course 2",
          duration: "14 minutes",
          date: "7 march",
          description: "Veniam ullamco voluptate proident in enim anim.",
          authors: ['author1', 'author2']
        },
        {
          id: 3,
          name: "Course 3",
          duration: "14 minutes",
          date: "10 march",
          description:
            "Mollit labore deserunt consectetur magna incididunt culpa ipsum.",
            authors: ['author1', 'author2']
        },
        {
          id: 4,
          name: "Course 4",
          duration: "14 minutes",
          date: "10 march",
          description:
            "Mollit labore deserunt consectetur magna incididunt culpa ipsum.",
            authors: ['author1', 'author2']
        },
        {
          id: 5,
          name: "Course 5",
          duration: "14 minutes",
          date: "10 march",
          description:
            "Mollit labore deserunt consectetur magna incididunt culpa ipsum.",
            authors: ['author1', 'author2']
        },
        {
          id: 6,
          name: "Course 6",
          duration: "14 minutes",
          date: "10 march",
          description:
            "Mollit labore deserunt consectetur magna incididunt culpa ipsum.",
            authors: ['author1', 'author2']
        },
        {
          id: 7,
          name: "Course 7",
          duration: "14 minutes",
          date: "10 march",
          description:
            "Mollit labore deserunt consectetur magna incididunt culpa ipsum.",
            authors: ['author1', 'author2']
        },
        {
          id: 8,
          name: "Course 8",
          duration: "14 minutes",
          date: "10 march",
          description:
            "Mollit labore deserunt consectetur magna incididunt culpa ipsum.",
          authors: ["sdfsdf", "oirqwoiqohi"]
        }
      ]
    };
  }
  render = () => (
    <Grid container spacing={2}>
      {this.state.courses.map(course => (
        <Grid key={course.id} item xs={12}>
          <CourseItem course={course} />
        </Grid>
      ))}
    </Grid>
  );
}
export default CourseList;
