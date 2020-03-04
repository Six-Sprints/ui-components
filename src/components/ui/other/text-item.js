import React from "react";
import { Box, Typography } from "@material-ui/core";

const TextItem = ({ label, value, labelVariant, valueVariant, strong }) => {
  return (
    <Box my={3}>
      <Typography variant={labelVariant}>{label}</Typography>
      <Box my={1}>
        <Typography variant={valueVariant}>
          {strong ? <strong>{value}</strong> : value}
        </Typography>
      </Box>
    </Box>
  );
};

export default TextItem;
