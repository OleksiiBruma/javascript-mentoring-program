import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/common/PrivateRoute";
import LoginPage from "../Layouts/LoginPage";
import Base from "../Layouts/Base/Base";
import SingleCoursePage from "../Layouts/SingleCoursePage";
import CoursesPage from "../Layouts/CoursesPage";

function App() {
  return (
      <Switch>
        <PrivateRoute path="/login">
          <Base>
            <LoginPage />
          </Base>
        </PrivateRoute>
        <PrivateRoute path="/courses/:id">
          <Base>
            <SingleCoursePage />
          </Base>
        </PrivateRoute>
        <PrivateRoute path="/courses">
          <Base>
            <CoursesPage />
          </Base>
        </PrivateRoute>
        <PrivateRoute path="/">
          <Base>
            <CoursesPage />
          </Base>
        </PrivateRoute>
      </Switch>
  );
}

export default App;
