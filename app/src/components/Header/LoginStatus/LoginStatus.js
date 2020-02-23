import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

const LoginStatus = ({ signout }) => (
  <Grid>
    <Link to="/login">
      <Button onClick={signout} title={"logout"} color="inherit" size="small">
        <ExitToApp fontSize="small" />
      </Button>
    </Link>
  </Grid>
);

LoginStatus.propTypes = {
  signout: PropType.func.isRequired
};

export default LoginStatus;
