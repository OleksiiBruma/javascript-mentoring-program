import renderer from "react-test-renderer";
import React from "react";
import DatePicker from "../DatePicker/DatePicker";

it('DatePicker should handle onChange and receive value', () => {
  const getDate = (date)=> date;
  const value = new Date();
    const component = renderer.create(
      <DatePicker handleChange={getDate} value={value}/>,
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
