import renderer from "react-test-renderer";
import React from "react";
import MinutesToHours from "../MinutesToHours/MinutesToHours";

it("return seconds converted to hours", () => {
  const component = renderer.create(<MinutesToHours render={(convert)=>convert(3333)}/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

