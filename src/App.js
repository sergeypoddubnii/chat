import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Loader from "./components/Loader";
import React, { useContext } from "react";
import { Context } from "./index";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";

function App() {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
