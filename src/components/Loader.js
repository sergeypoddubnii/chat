import { Container, Grid } from "@material-ui/core";
import React from "react";

function Login() {
  return (
    <Container>
      <Grid
        container
        style={{
          height: window.innerHeight - 50,
        }}
        alignItems={"center"}
        justify={"center"}
      >
        <Grid container alignItems={"center"} direction={"column"}>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
