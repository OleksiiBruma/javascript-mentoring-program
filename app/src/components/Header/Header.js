import React from "react";
import { Toolbar, AppBar, Grid } from "@material-ui/core";
import Logo from "./Logo";
import Breadcrumbs from "./Breadcrumbs";
import LoginStatus from "./LoginStatus";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks";

const Header = ({ isAuthenticate, logout }) => {
  const [form] = useForm();
  const currentCourseName = form.name;
  const history = useHistory();
  const formView = form.id ? true : false;
  return (
    <AppBar position={"static"}>
      <Toolbar>
        <Grid container alignItems={"center"}>
          <Grid item xs={2} sm={1}>
            <Logo fontSize="large" />
          </Grid>
          <Grid item xs>
            {isAuthenticate && (
              <Breadcrumbs
                currentCourseName={formView ? currentCourseName : false}
              />
            )}
          </Grid>
          <Grid item container xs={2} sm={1} justify={"flex-end"}>
            {isAuthenticate && (
              <LoginStatus logout={() => logout({ history })} />
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
