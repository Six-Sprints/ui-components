import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: "center",
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    background: "#F6F7FC 0% 0% no-repeat padding-box",
    boxShadow: "-5px -5px 10px #FFFFFFE6, 5px 5px 10px #D6D7DB",
    borderRadius: 14
  },
  shadow: {
    boxShadow: "0px 3px 6px #00000029"
  }
}));

const NmBox = props => {
  const classes = useStyles();
  return <Paper className={classes.paper}>{props.children}</Paper>;
};

export default NmBox;
