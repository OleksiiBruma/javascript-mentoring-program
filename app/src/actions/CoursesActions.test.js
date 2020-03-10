import * as actions from "../actions";
import * as types from "../constants";
import { baseCoursesUrl } from "../utils/constants";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const history = {
  push() {
    return jest.fn();
  }
};

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
  it("should create an action to delete course successfully", () => {
    const payload = [{ id: 1 }];
    const expectedAction = {
      type: types.DELETE_COURSE_SUCCESS,
      payload
    };
    expect(actions.deleteCourseSuccess(payload)).toMatchObject(expectedAction);
  });
});

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" }
  ];
  it("creates LOAD_COURSES_SUCCESS when loading courses has been done", () => {
    fetchMock.get(`${baseCoursesUrl}`, courses);
    const expectedActions = [
      { type: types.RESET_ERROR },
      { type: types.SHOW_LOADER },
      { type: types.LOAD_COURSES_SUCCESS, payload: courses },
      { type: types.HIDE_LOADER }
    ];
    const store = mockStore({ courses: [] });
    return store.dispatch(actions.loadCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("creates LOAD_COURSES_ERROR when error occured while loading courses", () => {
    fetchMock.mock(`${baseCoursesUrl}`, 500);
    const expectedActions = [
      { type: types.RESET_ERROR },
      { type: types.SHOW_LOADER },
      {
        type: types.LOAD_COURSES_ERROR,
        payload: "Cannot load courses, please try again"
      },
      { type: types.HIDE_LOADER }
    ];
    const store = mockStore({ courses: [] });
    return store.dispatch(actions.loadCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("creates DELETE_COURSE_SUCCESS when deleting course has been done", () => {
    fetchMock.mock(`${baseCoursesUrl}/1`, 200);
    const id = "1";
    const expectedActions = [
      { type: types.RESET_ERROR },
      { type: types.SHOW_LOADER },
      {
        type: types.DELETE_COURSE_SUCCESS,
        payload: id
      },
      { type: types.HIDE_LOADER }
    ];
    const store = mockStore({ courses: [] });
    return store.dispatch(actions.deleteCourseById(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("creates DELETE_COURSE_ERROR when error has been occured while deleting course", () => {
    fetchMock.mock(`${baseCoursesUrl}/1`, 500);
    const id = "1";
    const expectedActions = [
      { type: types.RESET_ERROR },
      { type: types.SHOW_LOADER },
      {
        type: types.DELETE_COURSE_ERROR,
        payload: "Cannot delete courses"
      },
      { type: types.HIDE_LOADER }
    ];
    const store = mockStore({ courses: [] });
    return store.dispatch(actions.deleteCourseById(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("creates ADD_COURSE_SUCCESS when deleting course has been done", () => {
    fetchMock.mock(`${baseCoursesUrl}`, {
      id: 1
    });
    const body = "1";
    const expectedActions = [
      { type: types.RESET_ERROR },
      { type: types.SHOW_LOADER },
      {
        type: types.ADD_COURSE_SUCCESS,
        payload: {
          id: 1
        }
      },
      { type: types.HIDE_LOADER }
    ];
    const store = mockStore({ courses: [] });
    return store.dispatch(actions.addCourse({ body, history })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("creates ADD_COURSE_ERROR when deleting course has been done", () => {
    fetchMock.mock(`${baseCoursesUrl}`, 500);
    const body = "1";
    const expectedActions = [
      { type: types.RESET_ERROR },
      { type: types.SHOW_LOADER },
      {
        type: types.ADD_COURSE_ERROR,
        payload: "Cannot add new course, please try again"
      },
      { type: types.HIDE_LOADER }
    ];
    const store = mockStore({ courses: [] });
    return store.dispatch(actions.addCourse({ body, history })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("creates ADD_COURSE_ERROR when deleting course has been done", () => {
    fetchMock.mock(`${baseCoursesUrl}/1`, 200);
    const id = "1";
    const body = {
      name : "123"
    }
    const expectedActions = [
      { type: types.SHOW_LOADER },
      { type: types.RESET_ERROR },
      { type: types.HIDE_LOADER }
    ];
    const store = mockStore({ courses: [] });
    return store.dispatch(actions.editCourse({ body, history, id })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
