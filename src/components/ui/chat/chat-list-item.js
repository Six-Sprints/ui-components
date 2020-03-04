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
  }
}));

const ChatItem = ({ handleClick, name, text, time }) => {
  const classes = useStyles();
  return (
    <CardActionArea onClick={handleClick} className={classes.roundBorder}>
      <Box my={2} mx={1} display="flex" justifyContent="space-between">
        <Avatar>S</Avatar>
        <Box mx={1}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle2">{text}</Typography>
        </Box>
        <div>
          <Typography variant="caption">{time}</Typography>
        </div>
      </Box>
    </CardActionArea>
  );
};

export default ChatItem;
