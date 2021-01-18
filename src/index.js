import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDCmTt0ug-spwcRFkTNMvzadRVUKwOjoCM",
  authDomain: "chat-1f234.firebaseapp.com",
  projectId: "chat-1f234",
  storageBucket: "chat-1f234.appspot.com",
  messagingSenderId: "548217111200",
  appId: "1:548217111200:web:a96f04acebdcd9dc53bfc5",
  measurementId: "G-0Q49CGR5P7",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
