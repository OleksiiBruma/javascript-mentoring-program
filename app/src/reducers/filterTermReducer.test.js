import * as types from "../constants/actionTypes";
import reducer from "../reducers/filterTermReducer";

describe("filterTerm reducer", () => {
  it("should return the initial state", () => {
    const expected = "";
    expect(reducer(undefined, {})).toEqual(expected);
  });

  it("should handle SET_FILTER_TERM", () => {
    const mockedParams = "term";
    expect(
      reducer("", {
        type: types.SET_FILTER_TERM,
        payload: mockedParams
      })
    ).toEqual(mockedParams);
  });
});
