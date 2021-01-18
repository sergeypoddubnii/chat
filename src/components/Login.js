import { Container, Grid, Box, Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "..";
import firebase from "firebase";

function Login() {
  const { auth } = useContext(Context);

  const handleLoginIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

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
            <Button variant={"outlined"} onClick={handleLoginIn}>
              Login In with google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
