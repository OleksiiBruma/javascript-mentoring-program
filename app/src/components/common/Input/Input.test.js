import renderer from "react-test-renderer";
import React from "react";
import Input from "../Input";

it("Input ", () => {
  const inputData = {
    name: "login",
    value: "",
    error: false,
    emptyText: `required`,
    incorrectText: `incorrect login`,
    errorText: ``,
    type: "text"
  };
  const handlerChange = () => {};
  const handleBlur = () => {};

  const component = renderer.create(
    <Input inputData={inputData} handleChange={handlerChange}
    handleBlur={handleBlur} />
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
