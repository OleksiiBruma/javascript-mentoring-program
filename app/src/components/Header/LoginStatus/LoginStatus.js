import React from "react";
import PropType from "prop-types";
import { Button, Grid } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

const LoginStatus = ({ logout }) => (
  <Grid>
      <Button onClick={logout} title={"logout"} color="inherit" size="small">
        <ExitToApp fontSize="small" />
      </Button>
  </Grid>
);

LoginStatus.propTypes = {
  logout: PropType.func.isRequired
};

export default LoginStatus;
