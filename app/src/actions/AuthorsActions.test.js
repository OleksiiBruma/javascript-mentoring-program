import * as actions from "../actions";
import * as types from "../constants";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { baseUrl } from "../utils/constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
describe("async actions", () => {
  it("creates AUTHORS_SUCCESS when loading authors has been done successfully ", () => {
    const authors = ["author1, author2, author3"];
    fetchMock.mock(`${baseUrl}/api/authors`, {
      status: 200,
      body: authors
    });
    const expectedActions = [
      { type: types.SHOW_LOADER },
      { type: types.RESET_ERROR },
      {
        type: types.AUTHORS_SUCCESS,
        payload: authors
      },
      { type: types.HIDE_LOADER }
    ];
    const store = mockStore({ authenticate: true });
    return store.dispatch(actions.loadAuthors()).then(() => {
      expect(store.getActions()).toMatchObject(expectedActions);
    });
  });
});
