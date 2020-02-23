import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/common/PrivateRoute";
import LoginPage from "../Layouts/LoginPage";
import Base from "../Layouts/Base/Base";
import SingleCoursePage from "../Layouts/SingleCoursePage";
import CoursesPage from "../Layouts/CoursesPage";

function App() {
  return (
    <Base>
      <Switch>
        <PrivateRoute path="/login">
          <LoginPage />
        </PrivateRoute>
        <PrivateRoute path="/courses/:id">
          <SingleCoursePage />
        </PrivateRoute>
        <PrivateRoute path="/courses/new">
          <SingleCoursePage />
        </PrivateRoute>
        <PrivateRoute path="/courses">
          <CoursesPage />
        </PrivateRoute>
        <PrivateRoute path="/">
          <CoursesPage />
        </PrivateRoute>
      </Switch>
    </Base>
  );
}

export default App;
