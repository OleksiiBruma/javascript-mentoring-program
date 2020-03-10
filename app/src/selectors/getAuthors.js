import { createSelector } from "reselect";

const getAuthorsList = state => state.authors;

export const getAuthors = createSelector([getAuthorsList], authors =>
  authors.toJS()
);
