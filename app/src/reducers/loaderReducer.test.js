import * as types from "../constants/actionTypes";
import reducer from "../reducers/loaderReducer";

describe("loader reducer", () => {
  it("should return the initial state", () => {
    const expected = false;
    expect(reducer(undefined, {})).toEqual(expected);
  });

  it("should handle SHOW_LOADER", () => {
    const mockedParams = true;
    expect(
      reducer(false, {
        type: types.SHOW_LOADER
      })
    ).toEqual(mockedParams);
  });
  it("should handle HIDE_LOADER", () => {
    const mockedParams = false;
    expect(
      reducer(true, {
        type: types.HIDE_LOADER
      })
    ).toEqual(mockedParams);
  });
});
