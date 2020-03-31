import * as types from "../constants/actionTypes";
import reducer from "../reducers/errorReducer";

describe("errors reducer", () => {
  it("should return the initial state", () => {
    const expected = "";
    expect(reducer(undefined, {})).toEqual(expected);
  });

  it("should handle LOGIN_ERROR", () => {
    const mockedParams = "error message";
    expect(
      reducer("", {
        type: types.LOGIN_ERROR,
        payload: mockedParams
      })
    ).toEqual(mockedParams);
  });
  it("should handle LOAD_COURSES_ERROR", () => {
    const mockedParams = "Cannot get courses, please try again";
    expect(
      reducer("", {
        type: types.LOAD_COURSES_ERROR
      })
    ).toEqual(mockedParams);
  });
  it("should handle RESET_ERROR", () => {
    const mockedParams = "";
    expect(
      reducer("", {
        type: types.RESET_ERROR
      })
    ).toEqual(mockedParams);
  });
});
