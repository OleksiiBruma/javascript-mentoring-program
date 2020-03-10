import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks";
import Input from "../../components/common/Input";
import TransferList from "../../components/TransferList";
import DatePicker from "../../components/common/DatePicker";
import { Save, Cancel } from "@material-ui/icons";
import { Grid, Typography, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import MinutesToHours from "../../components/common/MinutesToHours";
export const SingleCoursePage = ({ addCourse, editCourse }) => {
  const history = useHistory();
  const goToCourses = () => {
    history.push("/courses");
  };
  const [form, setForm] = useForm();
  const handleChangeInput = ({ target: { value, name } }) => {
    if (typeof value === "number" && value < 0) {
      return;
    }
    setForm({ ...form, [name]: value });
  };
  const handleChangeDate = date => setForm({ ...form, date: date });
  const handleChangeAuthors = value => setForm({ ...form, authors: value });

  const isFormValid = () => {
    setForm({ ...form, error: false });
    const status =
      form.name !== "" &&
      form.description !== "" &&
      form.duration > 0 &&
      form.authors.length;
    !status &&
      setForm({ ...form, error: true, errorText: "Please fill in all fields" });
    return status;
  };
  const onCancel = e => {
    e.preventDefault();
    goToCourses();
  };
  const handlerSubmit = e => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    const body = {
      name: form.name,
      description: form.description,
      date: form.date,
      duration: form.duration,
      authors: form.authors
    };

    form.editView
      ? editCourse({ body, history, id: form.id })
      : addCourse({ body, history });
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
          {form.error && (
            <Alert variant="outlined" severity="error">
              {form.errorText}
            </Alert>
          )}
          <Grid item>
            <Input
              inputData={{
                name: "name",
                value: form.name,
                type: "text"
              }}
              handleChange={handleChangeInput}
            />
          </Grid>
          <Grid item>
            <Input
              inputData={{
                name: "description",
                value: form.description,
                multiline: true,
                rows: 4,
                type: "text",
                variant: "outlined"
              }}
              handleChange={handleChangeInput}
            />
          </Grid>
          <Grid item container alignItems={"center"}>
            <Grid item xs={2}>
              <Input
                inputData={{
                  name: "duration",
                  value: form.duration,
                  type: "number"
                }}
                handleChange={handleChangeInput}
              />
            </Grid>
            <Grid item>
              <MinutesToHours
                render={convert => (
                  <Typography>{convert(form.duration)}</Typography>
                )}
              />
            </Grid>
          </Grid>
          <Grid item>
            <DatePicker value={form.date} handleChange={handleChangeDate} />
          </Grid>
          <Grid item>
            <TransferList
              handleChange={handleChangeAuthors}
              chosenList={form.authors}
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
