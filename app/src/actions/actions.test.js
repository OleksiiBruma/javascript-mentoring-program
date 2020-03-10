import * as actions from "../actions";
import * as types from "../constants/actionTypes";
describe("actions", () => {
  it("should create an action to load courses successfully", () => {
    const payload = [
      { id: 1, name: "course1" },
      { id: 2, name: "course2" }
    ];
    const expectedAction = {
      type: types.LOAD_COURSES_SUCCESS,
      payload
    };
    expect(actions.loadCoursesSuccess(payload)).toMatchObject(expectedAction);
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

describe("actions", () => {
  it("should create an action to show loader", () => {
    const expectedAction = {
      type: types.SHOW_LOADER
    };
    expect(actions.showLoader()).toMatchObject(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to hide loader", () => {
    const expectedAction = {
      type: types.HIDE_LOADER
    };
    expect(actions.hideLoader()).toMatchObject(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to reset error", () => {
    const expectedAction = {
      type: types.RESET_ERROR
    };
    expect(actions.resetError()).toMatchObject(expectedAction);
  });
});
describe("actions", () => {
  it("should create an action to delete course successfully", () => {
    const payload = [{ id: 1 }];
    const expectedAction = {
      type: types.DELETE_COURSE_SUCCESS,
      payload
    };
    expect(actions.deleteCourseSuccess(payload)).toMatchObject(expectedAction);
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
    it("should create an action to login successfully", () => {
      const expectedAction = {
        type: types.LOGIN_SUCCESS
      };
      expect(actions.loginSuccess()).toMatchObject(expectedAction);
    });
  });
  describe("actions", () => {
    it("should create an action to logout successfully", () => {
      const expectedAction = {
        type: types.LOGOUT_SUCCESS
      };
      expect(actions.logoutSuccess()).toMatchObject(expectedAction);
    });
  });
  describe("actions", () => {
    it("should create an action to load list of authors ", () => {
      const payload = ["author1, author2, author3"];
      const expectedAction = {
        type: types.AUTHORS_SUCCESS,
        payload
      };
      expect(actions.authorsSuccess(payload)).toMatchObject(expectedAction);
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
    it("should create an action to set filtered term ", () => {
      const payload = "filtered term";
      const expectedAction = {
        type: types.SET_FILTER_TERM,
        payload
      };
      expect(actions.setFilterTerm(payload)).toMatchObject(expectedAction);
    });
  });
  describe("actions", () => {
    it("should create an action to set filtered term ", () => {
      const payload = "filtered term";
      const expectedAction = {
        type: types.SET_FILTER_TERM,
        payload
      };
      expect(actions.setFilterTerm(payload)).toMatchObject(expectedAction);
    });
  });