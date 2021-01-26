import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/constants";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";

function Header() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  const isPrivate = !!user;
  const handleOut = () => auth.signOut();
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container justify={"flex-end"}>
            {isPrivate ? (
              <Button variant={"outlined"} onClick={handleOut}>
                LogOut
              </Button>
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
