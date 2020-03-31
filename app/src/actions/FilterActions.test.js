import * as actions from "../actions";
import * as types from "../constants";

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