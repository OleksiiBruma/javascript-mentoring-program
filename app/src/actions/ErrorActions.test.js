import * as actions from "../actions";
import * as types from "../constants";
describe("actions", () => {
  it("should create an action to reset error", () => {
    const expectedAction = {
      type: types.RESET_ERROR
    };
    expect(actions.resetError()).toMatchObject(expectedAction);
  });
});
describe("actions", () => {
  it("should create an action to show error after unsuccessfully deleted course", () => {
    const payload = "error message";
    const expectedAction = {
      type: types.DELETE_COURSE_ERROR,
      payload
    };
    expect(actions.deleteCourseError(payload)).toMatchObject(expectedAction);
  });
});
describe("actions", () => {
  it("should create an action to show error while loading list of authors ", () => {
    const payload = "error message";
    const expectedAction = {
      type: types.AUTHORS_ERROR,
      payload
    };
    expect(actions.authorsError(payload)).toMatchObject(expectedAction);
  });
});
describe("actions", () => {
  it("should create an action to show error while loading courses", () => {
    const payload = "error text";
    const expectedAction = {
      type: types.LOAD_COURSES_ERROR,
      payload
    };
    expect(actions.loadCoursesError(payload)).toMatchObject(expectedAction);
  });
});
