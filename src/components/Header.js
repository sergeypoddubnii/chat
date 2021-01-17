import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/constants";

function Header() {
  const isPrivate = true;
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justify={"flex-end"}>
            {isPrivate ? (
              <Button variant={"outlined"}>Out</Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button variant={"outlined"}>Login</Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
