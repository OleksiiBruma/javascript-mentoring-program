import React, { useState, useEffect } from "react";
import Input from "../../components/common/Input";
import TransferList from "../../components/TransferList";
import DatePicker from "../../components/DatePicker";
import { Save, Cancel } from "@material-ui/icons";
import { Grid, Typography, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import MinutesToHours from "../../components/common/MinutesToHours";
import { useParams } from "react-router-dom";
export const SingleCoursePage = ({
  loadAuthors,
  allAuthors,
  history,
  addCourse,
  editCourse,
  currentCourse,
  loadCourse
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [authors, setAuthors] = useState([]);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const editCourseView = currentCourse => {
    if(!currentCourse.id){
      return
    }
    const { name, description, date, authors, duration } = currentCourse;
    setName(name);
    setDescription(description);
    setDate(new Date(date));
    setAuthors([...authors]);
    setDuration(duration);
  };

  useEffect(() => {
    editCourseView(currentCourse);
  }, [currentCourse]);
  useEffect(() => {
     loadCourse({ id });
  }, [id,loadCourse]);

  useEffect(() => {
    loadAuthors();
  }, [loadAuthors]);

  const changeNameInput = ({ target: { value } }) => setName(value);
  const changeDescriptionInput = ({ target: { value } }) =>
    setDescription(value);
  const changeDurationInput = ({ target: { value } }) => {
    if (value < 0) {
      return;
    }
    setDuration(value);
  };
  const changeDateInput = date => setDate(date);

  const isFormValid = () => {
    setError("");
    return name !== "" && description !== "" && duration > 0 && authors.length;
  };
  const onCancel = e => {
    e.preventDefault();
    history.push("/courses");
  };
  const updateAuthors = value => setAuthors(value);
  const handlerSubmit = e => {
    e.preventDefault();
    if (!isFormValid()) {
      setError(true);
      return;
    }
    const body = {
      name,
      description,
      date,
      duration,
      authors
    };
    addCourse({ body, history });
  };
  return (
    <form>
      <Grid container justify={"center"}>
        <Grid
          container
          item
          xs={5}
          direction="column"
          spacing={0}
          alignItems={"flex-start"}
        >
          {error && (
            <Alert variant="outlined" severity="error">
              {"Please fill in all fields"}
            </Alert>
          )}
          <Grid item>
            <Input
              inputData={{
                name: "Name",
                value: name,
                type: "text"
              }}
              handleChange={changeNameInput}
            />
          </Grid>
          <Grid item>
            <Input
              inputData={{
                name: "Description",
                value: description,
                multiline: true,
                rows: 4,
                type: "text",
                variant: "outlined"
              }}
              handleChange={changeDescriptionInput}
            />
          </Grid>
          <Grid item container alignItems={"center"}>
            <Grid item xs={2}>
              <Input
                inputData={{
                  name: "Duration",
                  value: duration,
                  type: "number"
                }}
                handleChange={changeDurationInput}
              />
            </Grid>
            <Grid item>
              <MinutesToHours
                render={convert => <Typography>{convert(duration)}</Typography>}
              />
            </Grid>
          </Grid>
          <Grid item>
            <DatePicker value={date} handleChange={changeDateInput} />
          </Grid>
          <Grid item>
            <TransferList
              handleChange={updateAuthors}
              defaultList={allAuthors}
              chosenList={authors}
            />
          </Grid>
        </Grid>
        <Grid container justify={"center"} spacing={5}>
          <Grid item>
            <Button
              variant="contained"
              title={"save"}
              color="primary"
              size="large"
              onClick={handlerSubmit}
            >
              <Save fontSize="small" /> Save
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              title={"cancel"}
              color="secondary"
              size="large"
              onClick={onCancel}
            >
              <Cancel fontSize="small" /> Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default SingleCoursePage;
