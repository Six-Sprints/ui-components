import React from "react";
import {
  Box,
  Typography,
  CardActionArea,
  Avatar,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  roundBorder: {
    borderRadius: 14
  },
  ellipsis: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}));

const ChatItem = ({ handleClick, name, text, time }) => {
  const classes = useStyles();
  return (
    <CardActionArea onClick={handleClick} className={classes.roundBorder}>
      <Box my={2} mx={1} display="flex">
        <Box width={"15%"}>
          <Avatar>{name.charAt(0)}</Avatar>
        </Box>
        <Box width={"68%"} mx={1}>
          <Typography className={classes.ellipsis} variant="h6">
            {name}
          </Typography>
          <Typography className={classes.ellipsis} variant="subtitle2">
            {text}
          </Typography>
        </Box>
        <Box width={"15%"}>
          <Typography variant="caption">{time}</Typography>
        </Box>
      </Box>
    </CardActionArea>
  );
};

export default ChatItem;
