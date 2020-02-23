import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MinutesToHours from "../common/MinutesToHours";
import Dialog from "../common/Dialog";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  Grid
} from "@material-ui/core";
import WithDateFormat from "../common/WithDateFormat";

const CourseItem = ({
  course: { id, name, duration, date, description },
  handlerClick
}) => (
  <Card key={id}>
    <Grid container>
      <Grid item xs>
        <CardActionArea>
          <CardContent>
            <Grid container>
              <Grid container item>
                <Grid item xs={6} md={2} sm={3}>
                  <Typography
                    key={name}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {name}
                  </Typography>
                </Grid>
                <Grid item xs>
                  <MinutesToHours
                    render={convert => (
                      <Typography key={duration} color="textSecondary">
                        {convert(duration)}
                      </Typography>
                    )}
                  />
                </Grid>
                <Grid item xs={3} md={1} sm={2}>
                  <WithDateFormat
                    render={convert => (
                      <Typography
                        key={date}
                        color="textSecondary"
                        component="p"
                      >
                        {convert(date)}
                      </Typography>
                    )}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  key={description}
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  {description}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Grid>
      <Grid item container justify={"center"} xs={3} md={1}>
        <CardActions>
          <Grid
            container
            item
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <Grid item xs>
              <Link to={`/courses/${id}`}>
                <Button key={"edit"} size="small" color="primary">
                  Edit
                </Button>
              </Link>
            </Grid>
            <Grid item xs>
              <Dialog handleConfirm={() => handlerClick(id)} text={"Delete"} />
            </Grid>
          </Grid>
        </CardActions>
      </Grid>
    </Grid>
  </Card>
);
CourseItem.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default CourseItem;
