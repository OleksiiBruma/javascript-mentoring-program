import renderer from "react-test-renderer";
import React from "react";
import { Alert } from "../Alert/Alert";

it('Alert return null when error message is not provided', () => {
    const component = renderer.create(
      <Alert/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Alert return error message', () => {
    const component = renderer.create(
      <Alert errorMessage="error"/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
