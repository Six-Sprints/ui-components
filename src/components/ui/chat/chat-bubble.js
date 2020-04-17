import React from "react";
import { Box, Typography, Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  roundBorder: {
    borderRadius: 14
  },

  textBubbleLeftTop: {
    maxWidth: "70%",
    borderRadius: theme.spacing(0, 4, 4, 4),
    padding: theme.spacing(2, 2, 2, 2),
    color: theme.palette.common.black,
    font: "10px",

    backgroundColor: theme.palette.chatBg
  },
  textBubbleLeftBottom: {
    maxWidth: "70%",
    borderRadius: theme.spacing(4, 4, 4, 0),
    padding: theme.spacing(2, 2, 2, 2),
    color: theme.palette.common.black,
    font: "10px",
    backgroundColor: theme.palette.chatBg
  },

  textBubbleRightBottom: {
    maxWidth: "70%",
    borderRadius: theme.spacing(4, 4, 0, 4),
    padding: theme.spacing(2, 2, 2, 2),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main
  },
  textBubbleRightTop: {
    maxWidth: "70%",
    borderRadius: theme.spacing(4, 0, 4, 4),
    padding: theme.spacing(2, 2, 2, 2),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main
  },

  bg: {
    backgroundColor: theme.palette.primary.main
  }
}));

const ChatBubble = ({ user, left, text, time, sameUser }) => {
  const classes = useStyles();

  const renderAvatar = user => {
    return (
      <Box visibility={sameUser ? "hidden" : "visible"} mr={2}>
        <Avatar>{user && user[0]}</Avatar>
      </Box>
    );
  };
  return (
    <Box my={2} mx={1}>
      <Box display="flex" justifyContent={left ? "flex-start" : "flex-end"}>
        {left ? renderAvatar(user, sameUser) : null}

        {!left && (
          <Box mr={2} alignSelf="flex-end">
            <Typography variant="caption">{time}</Typography>
          </Box>
        )}
        <Box
          className={
            left ? classes.textBubbleLeftTop : classes.textBubbleRightBottom
          }
        >
          <Typography variant="subtitle2">{text}</Typography>
        </Box>
        {left && (
          <Box ml={2} alignSelf="flex-end">
            <Typography variant="caption">{time}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ChatBubble;
