import React from "react";
import { Typography, Link } from "@material-ui/core";

const Copyright = ({ title, url, color, ...rest }) => {
  return (
    <Typography {...rest} variant="body2" color={color} align="center">
      {"Copyright ©   "}
      <Link color={color} target="_blank" href={url}>
        {title}
      </Link>{" "}
      {new Date().getFullYear()}
      {"   "}
      {"All rights reserved"}
      {"."}
    </Typography>
  );
};

export default Copyright;
