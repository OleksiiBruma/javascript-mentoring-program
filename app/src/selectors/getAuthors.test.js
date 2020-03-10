import { getAuthors } from "../selectors";
import { List } from "immutable";

describe("getAuthors selector", () => {
  it("should return authors as empty array", () => {
    const mockParameters = {
      authors: List([])
    };
    const expected = [];
    const selected = getAuthors.resultFunc(mockParameters.authors);
    expect(selected).toMatchObject(expected);
  });
  it("should return authors as specific array", () => {
    const mockParameters = {
      authors: List(['author1','author2'])
    };
    const expected = ['author1','author2'];
    const selected = getAuthors.resultFunc(mockParameters.authors);
    expect(selected).toMatchObject(expected);
  });
});
