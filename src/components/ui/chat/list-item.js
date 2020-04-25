import React from "react";
import {
  Box,
  Typography,
  CardActionArea,
  Avatar,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  ellipsis: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}));

const ListItem = ({
  handleClick,
  image,
  name,
  text,
  time,
  itemStyle,
  timeStyle,
  nameVariant = "h6",
  textVariant = "subtitle2",
  timeVariant = "caption"
}) => {
  const classes = useStyles();
  return (
    <CardActionArea onClick={handleClick} className={itemStyle}>
      <Box my={2} mx={1} display="flex" alignItems="center">
        <Avatar alt="avatar-image" src={image} style={{ marginRight: 8 }}>
          {name.charAt(0)}
        </Avatar>

        <Box width={"60%"} mx={2}>
          <Typography className={classes.ellipsis} variant={nameVariant}>
            {name}
          </Typography>
          <Typography className={classes.ellipsis} variant={textVariant}>
            {text}
          </Typography>
        </Box>

        <Box className={timeStyle} mb={3}>
          <Typography variant={timeVariant}>{time}</Typography>
        </Box>
      </Box>
    </CardActionArea>
  );
};

export default ListItem;
