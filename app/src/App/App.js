import React from "react";
import LoginPage from "../Layouts/LoginPage";
import Base from "../Layouts/Base/Base";
import SingleCoursePage from "../Layouts/SingleCoursePage/SingleCoursePage";
import CoursesPage from "../Layouts/CoursesPage";

function App() {
  return (
    <Base>
      {/* <LoginPage/> */}
      {/* <SingleCoursePage/>  */}
      <CoursesPage />
    </Base>
  );
}

export default App;
