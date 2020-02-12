import React from "react";
import PropType from "prop-types"
import { Typography, Button, Grid } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

const LoginStatus = ({ userName }) => (
  <Grid>
    <Typography>{userName}</Typography>
    <Button title={"logout"} color="inherit" size="small">
      <ExitToApp fontSize="small" />
    </Button>
  </Grid>
);

LoginStatus.propTypes = {
  userName: PropType.string.isRequired
}


export default LoginStatus;
