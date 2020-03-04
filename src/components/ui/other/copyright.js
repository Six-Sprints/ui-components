import React from "react";
import { Typography, Link } from "@material-ui/core";

const Copyright = ({ title, url }) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" target="_blank" href={link}>
        {title}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
