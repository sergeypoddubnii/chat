import { Container, Grid, Box, Button } from "@material-ui/core";
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
        <Grid
          container
          style={{ width: 400, background: "lightgray" }}
          alignItems={"center"}
          direction={"column"}
        >
          <Box p={5}>
            <Button variant={"outlined"}>Login In with google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
