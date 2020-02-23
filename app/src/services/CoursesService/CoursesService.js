import { baseUrl } from "../../utils/constants";
class CoursesService {
  constructor() {
    this.base = `${baseUrl}/api/courses`;
  }
  getCourses = async () => {
    const response = await fetch(`${this.base}`).catch(err => {
      throw new Error(err.message);
    });

    if (!response.ok) {
      throw new Error("server error");
    }
    const json = await response.json();
    return json;
  };
  deleteCourseById = async id => {
    const response = await fetch(`${this.base}/${id}`, {
      method: "DELETE"
    }).catch(err => {
      throw new Error(err.message);
    });
    if (!response.ok) {
      throw  new Error("server error");
    }
    const json = await response.json();
    if (json.message) {
      throw  new Error(json.message);
    }
    return json;
  };
  addCourse = async body => {
    const response = await fetch(`${this.base}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(body)
    }).catch(err => {
      throw new Error(err.message);
    });
    if (!response.ok) {
      throw new Error("server error");
    }
    const json = await response.json();
    return json;
  };
  getAuthors = async () => {
    const response = await fetch(`${baseUrl}/api/authors`).catch(err => {
      throw new Error(err.message);
    });
    if (!response.ok) {
      throw new Error("server error");
    }
    const json = await response.json();
    return json;
  };
}
export default new CoursesService();
