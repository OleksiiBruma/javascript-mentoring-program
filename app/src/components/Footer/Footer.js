import React from "react";
import PropType from "prop-types"
import { Typography, AppBar, Toolbar } from "@material-ui/core";
const Footer = ({ classes: { footer } }) => (
  <AppBar position="static">
    <Toolbar>
      <footer className={footer}>
        <Typography>Copyright 2020</Typography>
      </footer>
    </Toolbar>
  </AppBar>
);

Footer.propType = {
  classes: PropType.shape( {
    footer: PropType.string.isRequired
  })
}
export default Footer;
