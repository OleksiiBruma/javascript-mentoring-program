import renderer from "react-test-renderer";
import React from "react";
import Dialog from "../Dialog/Dialog";

it("Dialog should handle open confirm and close", () => {
  const handlerClick = () => true;

  const component = renderer.create(
    <Dialog handleConfirm={() => handlerClick(id)} text={"Delete"} />
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
