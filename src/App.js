import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PaymentForm from "./PaymentForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    position: "absolute",
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    maxHeight: 350
  },
  canvas1: {
    position: "relative",
    backgroundColor: "lightGrey",
    zIndex: 0,
    maxWidth: 350,
    maxHeight: 230,
    borderRadius: 10,
    left: 50,
    top: 20
  },
  canvas2: {
    position: "absolute",
    backgroundColor: "grey",
    zIndex: 1,
    maxWidth: 350,
    maxHeight: 230,
    top: 0,
    left: 0,
    borderRadius: 10
  }
}));

function App() {
  const classes = useStyles();
  return PaymentForm();
}

export default App;
