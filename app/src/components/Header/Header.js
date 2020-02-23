import React, { Component } from "react";
import { Toolbar, AppBar, Grid } from "@material-ui/core";
import Logo from "./Logo";
import Breadcrumbs from "./Breadcrumbs";
import LoginStatus from "./LoginStatus";

class Header extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
  }
  render = () => (
    <AppBar position={"static"}>
      <Toolbar>
        <Grid container alignItems={"center"}>
          <Grid item xs={2} sm={1}>
            <Logo fontSize="large" />
          </Grid>
          <Grid item xs>
            {this.props.authContext.isAuthenticate && <Breadcrumbs />}
          </Grid>
          <Grid item container xs={2} sm={1} justify={"flex-end"}>
            {this.props.authContext.isAuthenticate && (
              <LoginStatus signout={this.props.authContext.signout} />
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
