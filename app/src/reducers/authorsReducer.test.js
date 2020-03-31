import * as types from "../constants/actionTypes";
import reducer from "../reducers/authorsReducer";
import { List } from "immutable";

describe("authors reducer", () => {
  it("should return the initial state", () => {
    const expected = List([]);
    expect(reducer(undefined, {})).toEqual(expected);
  });

  it("should handle AUTHORS_SUCCESS", () => {
    const mockedParams = List(["authors1, authors2"]);
    expect(
      reducer(List([]), {
        type: types.AUTHORS_SUCCESS,
        payload: mockedParams
      })
    ).toEqual(mockedParams);
  });
});
