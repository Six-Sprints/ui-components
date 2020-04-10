import React from "react";
import { Box, Typography, Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  roundBorder: {
    borderRadius: 14
  },

  textBubbleLeft: {
    width: "70%",
    borderRadius: theme.spacing(0, 4, 4, 4),
    padding: theme.spacing(2, 2, 2, 2),
    color: theme.palette.common.black,
    font: "10px",
    backgroundColor: theme.palette.chatBg
  },

  textBubbleRight: {
    width: "70%",
    borderRadius: theme.spacing(4, 4, 0, 4),
    padding: theme.spacing(2, 2, 2, 2),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main
  },

  bg: {
    backgroundColor: theme.palette.primary.main
  }
}));

const ChatBubble = ({
  user,
  left,
  text,
  time,
  textBubbleLeftClass,
  textBubbleRightClass
}) => {
  const classes = useStyles();
  return (
    <Box my={2} mx={1} display="flex">
      <Box display="flex" justifyContent={left ? "flex-start" : "flex-end"}>
        {left && (
          <Box mr={2}>
            <Avatar>{user && user[0]}</Avatar>
          </Box>
        )}

        <Box
          className={
            left
              ? textBubbleLeftClass || classes.textBubbleLeft
              : textBubbleRightClass || classes.textBubbleRight
          }
        >
          <Typography variant="subtitle2">{text}</Typography>
          <Box mt={3}>
            <Typography variant="caption">{time}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBubble;
