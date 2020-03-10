import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../constants/actionTypes";
import reducer from "../reducers/authenticateReducer";

describe("authenticate reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).not.toBeUndefined();
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(
      reducer([], {
        type: LOGIN_SUCCESS
      })
    ).toEqual(true);
  });
  it("should handle LOGOUT_SUCCESS", () => {
    expect(
      reducer([], {
        type: LOGOUT_SUCCESS
      })
    ).toEqual(false);
  });
});
