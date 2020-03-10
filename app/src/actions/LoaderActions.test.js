import * as actions from "../actions";
import * as types from "../constants/actionTypes";

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
