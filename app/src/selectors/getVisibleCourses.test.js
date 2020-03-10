import { getVisibleCourses } from "../selectors";
import { List } from "immutable";
describe("getVisibleCourses selector", () => {
  it("should return visible courses", () => {
    const mockParameters = {
      courses: List([{ name: "course1" }, { name: "course2" }]),
      filterTerm: 2
    };
    const expected = [{ name: "course2" }];
    const selected = getVisibleCourses.resultFunc(
      mockParameters.filterTerm,
      mockParameters.courses
    );
    expect(selected).toMatchObject(expected);
  });
  it("should return visible courses as empty array", () => {
    const mockParameters = {
      courses: List([{ name: "course1" }, { name: "course2" }]),
      filterTerm: 3
    };
    const expected = [];
    const selected = getVisibleCourses.resultFunc(
      mockParameters.filterTerm,
      mockParameters.courses
    );
    expect(selected).toMatchObject(expected);
  });
});
