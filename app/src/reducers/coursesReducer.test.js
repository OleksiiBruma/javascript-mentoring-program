import * as types from "../constants/actionTypes";
import reducer from "../reducers/coursesReducer";
import { List } from "immutable";

describe("courses reducer", () => {
  it("should return the initial state", () => {
    const expected = List([]);
    expect(reducer(undefined, {})).toEqual(expected);
  });

  it("should handle LOAD_COURSES_SUCCESS", () => {
    const mockedParams = List(["course1, course2"]);
    expect(
      reducer(List([]), {
        type: types.LOAD_COURSES_SUCCESS,
        payload: mockedParams
      })
    ).toEqual(mockedParams);
  });
  it("should handle DELETE_COURSE_SUCCESS", () => {
    const mockedParams = List([
      { id: 1, name: "course1" },
      { id: 2, name: "course2" }
    ]);
    const expected = List([
        { id: 2, name: "course2" }
      ]);
    expect(
      reducer(mockedParams, {
        type: types.DELETE_COURSE_SUCCESS,
        payload: 1
      })
    ).toEqual(expected);
  });
});
