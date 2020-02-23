import React, { Component } from "react";
import CourseItem from "../../components/CourseItem";
import Search from "../../components/Search";
import { Grid, Typography } from "@material-ui/core";
import CoursesService from "../../services/CoursesService";
class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      coursesFiltered: [],
      valueFiltered: ""
    };
  }
  componentDidMount = async () => {
    const courses = await CoursesService.getCourses().catch(err => {
      this.setState({
        message: err
      });
    });
    if (courses) {
      this.setState({
        courses: courses,
        coursesFiltered: courses
      });
    }
  };
  deleteCourse = async id => {
    const response = await CoursesService.deleteCourseById(id).catch(err => {
      this.setState({
        message: err
      });
      return;
    });
    if (response) {
      this.setState({
        courses: this.state.courses.filter(course => course.id !== id),
        coursesFiltered: this.state.coursesFiltered.filter(
          course => course.id !== id
        )
      });
    }
  };
  searchValueChange = ({ target: { value } }) => {
    this.setState({
      valueFiltered: value
    });
  };
  filterSubmit = e => {
    e.preventDefault();
    const { courses, valueFiltered } = this.state;
    this.setState({
      coursesFiltered: courses.filter(course =>
        course.name.includes(valueFiltered)
      )
    });
  };

  render = () => {
    const courses = this.state.coursesFiltered.length ? (
      this.state.coursesFiltered.map(course => (
        <Grid key={course.id} item xs={12}>
          <CourseItem course={course} handlerClick={this.deleteCourse}/>
        </Grid>
      ))
    ) : (
      <Grid container justify={"center"} item xs={12}>
        <Typography>{"Nothing to show"}</Typography>
      </Grid>
    );
    return (
      <Grid container justify={"center"} spacing={2}>
        <Grid item container xs={12} justify={"center"}>
          <Search
            handlerChange={this.searchValueChange}
            handlerSubmit={this.filterSubmit}
            valueFiltered={this.state.valueFiltered}
          />
        </Grid>
        <Grid container item xs={12} spacing={2}>
          {courses}
        </Grid>
      </Grid>
    );
  };
}

export default CoursesPage;
