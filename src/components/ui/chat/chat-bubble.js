import React from "react";
import { Box, Typography, Avatar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  roundBorder: {
    borderRadius: 14
  },

  textBubbleLeft: {
    borderRadius: theme.spacing(0, 4, 4, 4),
    padding: theme.spacing(2, 2, 2, 2),
    color: theme.palette.common.black,
    font: "10px",
    backgroundColor: theme.palette.chatBg
  },

  textBubbleRight: {
    borderRadius: theme.spacing(4, 4, 0, 4),
    padding: theme.spacing(2, 2, 2, 2),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main
  }
}));

const ChatBubble = ({
  user,
  text,
  time,
  textBubbleLeftClass,
  textBubbleRightClass
}) => {
  const classes = useStyles();
  return (
    <Box
      my={2}
      mx={1}
      display="flex"
      justifyContent={user ? "flex-end" : "flex-start"}
    >
      <Box display="flex" width="75%">
        {!user && (
          <Box mr={2}>
            <Avatar>S</Avatar>
          </Box>
        )}

        <Box
          className={
            user
              ? textBubbleRightClass || classes.textBubbleRight
              : textBubbleLeftClass || classes.textBubbleLeft
          }
        >
          <Typography variant="subtitle2">{text}</Typography>
          <Box mt={4}>
            <Typography variant="caption">
              <strong> {time}</strong>{" "}
            </Typography>
          </Box>
        </Box>
        <Box ml={2}></Box>
      </Box>
    </Box>
  );
};

export default ChatBubble;
