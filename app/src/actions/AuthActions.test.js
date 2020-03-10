import * as actions from "../actions";
import * as types from "../constants";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { baseUrl } from "../utils/constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  it("should create an action to logout successfully", () => {
    const expectedAction = {
      type: types.LOGOUT_SUCCESS
    };
    expect(actions.logoutSuccess()).toMatchObject(expectedAction);
  });
  it("should create an action to login successfully", () => {
    const expectedAction = {
      type: types.LOGIN_SUCCESS
    };
    expect(actions.loginSuccess()).toMatchObject(expectedAction);
  });
});

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  const history = {
    push() {
      return jest.fn();
    }
  };
  const credentials = {
    login: "user",
    password: "Qwerty345"
  };
  it("creates LOGIN_SUCCESS when authenticating has been done successfully", () => {
    fetchMock.post(`${baseUrl}/api/login`, {
      status: 200,
      ok: true,
      headers: { "content-type": "application/json" }
    });
    const expectedActions = [
      { type: types.RESET_ERROR },
      { type: types.SHOW_LOADER },
      { type: types.LOGIN_SUCCESS },
      { type: types.HIDE_LOADER }
    ];
    const store = mockStore({ authenticate: true });
    return store.dispatch(actions.login({ credentials, history })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("creates LOGIN_ERROR when credentials are not valid or server error", () => {
    fetchMock.mock(`${baseUrl}/api/login`, 500);
    const expectedActions = [
      { type: types.RESET_ERROR },
      { type: types.SHOW_LOADER },
      {
        type: types.LOGIN_ERROR,
        payload: "Incorrect credentials, please try again"
      },
      { type: types.HIDE_LOADER }
    ];
    const store = mockStore({ authenticate: true });
    return store.dispatch(actions.login({ credentials, history })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("creates LOGOUT_SUCCESS when logging out has been done successfully", () => {
    const expectedActions = [
      { type: types.SHOW_LOADER },
      { type: types.RESET_ERROR },
      { type: types.LOGOUT_SUCCESS },
      { type: types.HIDE_LOADER }
    ];
    const store = mockStore({ authenticate: false });
    return store.dispatch(actions.logout({ history })).then(() => {
      expect(store.getActions()).toMatchObject(expectedActions);
    });
  });
});
