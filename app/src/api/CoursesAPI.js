import { baseUrl, baseCoursesUrl } from "../utils/constants";

const getCoursesAPI = async () => await fetch(`${baseCoursesUrl}`);
const deleteCourseByIdAPI = async id =>
  await fetch(`${baseCoursesUrl}/${id}`, {
    method: "DELETE"
  });
const addCourseAPI = async body =>
  await fetch(`${baseCoursesUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(body)
  });
const editCourseAPI = async ({ body, id }) =>
  await fetch(`${baseCoursesUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(body)
  });
const getCourseByIdAPI = async id => await fetch(`${baseCoursesUrl}/${id}`);
const getAuthorsAPI = async () => await fetch(`${baseUrl}/api/authors`);

export {
  getCoursesAPI,
  deleteCourseByIdAPI,
  addCourseAPI,
  editCourseAPI,
  getCourseByIdAPI,
  getAuthorsAPI
};
