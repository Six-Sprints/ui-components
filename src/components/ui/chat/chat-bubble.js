import React from "react";
import {
  Box,
  Typography,
  Avatar,
  makeStyles,
  Button,
  IconButton
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  roundBorder: {
    borderRadius: 14
  },

  textBubbleLeftTop: {
    maxWidth: "70%",
    borderRadius: "1rem",
    borderTopLeftRadius: 0,
    padding: "0.5rem",
    color: theme.palette.common.black,
    font: "10px",
    // backgroundColor: theme.palette.chatBg
    backgroundColor: "#E6E6E6"
  },

  textBubble: {
    maxWidth: "70%",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "1rem",
    padding: theme.spacing(3),
    color: theme.palette.primary.main
    // backgroundColor: theme.palette.primary.main
  },

  textBubbleRightBottom: {
    maxWidth: "70%",
    borderRadius: "1rem",
    borderBottomRightRadius: 0,
    padding: "0.5rem",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main
  },

  bg: {
    backgroundColor: theme.palette.primary.main
  },
  img: {
    objectFit: "cover"
  }
}));

const ChatBubble = ({
  handleClick,
  messageType,
  actions,
  img,
  time,
  sameUser,
  user,
  left,
  text
}) => {
  const classes = useStyles();
  const dateTime = time.split(" ");

  const renderAvatar = user => {
    return (
      <Box visibility={sameUser ? "hidden" : "visible"} mr={2}>
        <Avatar>{user && user[0]}</Avatar>
      </Box>
    );
  };

  const renderTextActions = (actionArr, text) => {
    return (
      <Box display="flex" justifyContent="center" my="1rem">
        <Box className={classes.textBubble}>
          <Box m="1rem" textAlign="center">
            <Typography variant="subtitle2">{text}</Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="center" my="1rem">
            {actionArr.map((item, index) => (
              <Box m="1rem">
                <Button
                  key={index}
                  onClick={handleClick.bind(this, item.actionUrl)}
                  disableElevation
                  variant={index === 0 ? "contained" : "outlined"}
                  color="primary"
                >
                  {item.name}
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
  };

  const renderDownloadIcon = () => {
    return (
      <Box alignSelf="center">
        <a href={img} download>
          <IconButton size="medium">
            <img
              src={"https://storage.googleapis.com/eclinic_assets/download.svg"}
              alt="download-icon"
            />
          </IconButton>
        </a>
      </Box>
    );
  };

  const renderTextBubble = () => {
    return (
      <div>
        <Box display="flex" justifyContent={left ? "flex-start" : "flex-end"}>
          {left ? renderAvatar(user, sameUser) : null}

          {!left && img && renderDownloadIcon()}
          <Box
            className={
              left ? classes.textBubbleLeftTop : classes.textBubbleRightBottom
            }
          >
            {text && <Typography variant="subtitle2">{text}</Typography>}

            {img && (
              <img
                className={classes.img}
                width="100%"
                alt="chat-img"
                src={img}
              />
            )}
          </Box>

          {left && img && renderDownloadIcon()}
        </Box>
        {
          <Box
            ml="3.5rem"
            display="flex"
            justifyContent={left ? "flex-start" : "flex-end"}
          >
            <Typography variant="caption">{time}</Typography>
          </Box>
        }
      </div>
    );
  };

  return (
    <Box my={2} mx={1}>
      {messageType === "AUTOMATED"
        ? renderTextActions(actions, text)
        : renderTextBubble(img, time, sameUser, user, left, text)}
    </Box>
  );
};

export default ChatBubble;
