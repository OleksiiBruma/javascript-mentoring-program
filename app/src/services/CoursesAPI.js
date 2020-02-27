import { baseUrl, baseCoursesUrl } from "../utils/constants";

export const getCoursesAPI = async () => await fetch(`${baseCoursesUrl}`);
export const deleteCourseByIdAPI = async id =>
  await fetch(`${baseCoursesUrl}/${id}`, {
    method: "DELETE"
  });
export const addCourseAPI = async body =>
  await fetch(`${baseCoursesUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(body)
  });
export const editCourseAPI = async ({body, id}) =>
  await fetch(`${baseCoursesUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(body)
  });
export const getCourseByIdAPI = async id => await fetch(`${baseCoursesUrl}/${id}`);
export const getAuthorsAPI = async () => await fetch(`${baseUrl}/api/authors`);
