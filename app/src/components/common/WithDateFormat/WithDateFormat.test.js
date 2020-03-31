import renderer from "react-test-renderer";
import React from "react";
import WithDateFormat from "../WithDateFormat/WithDateFormat";

it("return formated date", () => {
  const component = renderer.create(<WithDateFormat render={(convert)=>convert("12/02/2018")}/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

