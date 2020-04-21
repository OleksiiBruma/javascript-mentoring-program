import * as fromCourses from "./courses.actions";

describe("loadCoursess", () => {
  it("should return an action", () => {
    expect(fromCourses.loadCourses().type).toBe("[Courses] Load Coursess");
  });
});
