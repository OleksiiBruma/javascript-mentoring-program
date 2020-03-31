import renderer from "react-test-renderer";
import React from "react";
import { Loader } from "../Loader/Loader";

it("Loader return null when isLoading = false", () => {
  const component = renderer.create(<Loader isLoading={false} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it("return Loader", () => {
  const component = renderer.create(<Loader isLoading={true} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
