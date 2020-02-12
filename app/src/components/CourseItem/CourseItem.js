import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
  Typography,
  Grid
} from "@material-ui/core";

const CourseItem = ({
  course: { id, name, duration, date, description }
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
                  <Typography key={duration} color="textSecondary">
                    {duration}
                  </Typography>
                </Grid>
                <Grid item xs={3} md={1} sm={2}>
                  <Typography key={date} color="textSecondary" component="p">
                    {date}
                  </Typography>
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
              <Button key={"edit"} size="small" color="primary">
                Edit
              </Button>
            </Grid>
            <Grid item xs>
              <Button key={"delete"} size="small" color="primary">
                Delete
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Grid>
    </Grid>
  </Card>
);
CourseItem.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default CourseItem;
