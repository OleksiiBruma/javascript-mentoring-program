import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseByIdAPI } from "../api";

export const useForm = errorHandler => {
  const { id } = useParams();
  const initialState = {
    name: "",
    description: "",
    date: new Date(),
    authors: [],
    duration: 0,
    error: false
  };
  const [form, setForm] = useState({ ...initialState });
  useEffect(() => {
    const editView = id === "new" || id === undefined ? false : true;
    if (!editView) {
      return;
    }

    const getCourse = async id => {
      try {
        const response = await getCourseByIdAPI(id);
        const course = await response.json();
        setForm(prevState => ({
          ...prevState,
          ...course,
          date: new Date(course.date),
          editView
        }));
        if (!response.ok) {
          throw new Error("Cannot find course, please try again");
        }
      } catch (error) {
        setForm(prevState => ({
          ...prevState,
          error: true,
          errorText: error.message
        }));
      }
    };
    getCourse(id);
    return () => setForm([]);
  }, [id, errorHandler]);
  return [form, setForm];
};
