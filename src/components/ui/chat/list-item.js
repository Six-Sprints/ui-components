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
  timeStyle
}) => {
  const classes = useStyles();
  return (
    <CardActionArea onClick={handleClick} className={itemStyle}>
      <Box my={2} mx={1} display="flex" alignItems="center">
        <Avatar alt="avatar-image" src={image}>
          {name.charAt(0)}
        </Avatar>

        <Box width={"68%"} mx={2}>
          <Typography className={classes.ellipsis} variant="h6">
            {name}
          </Typography>
          <Typography className={classes.ellipsis} variant="subtitle2">
            {text}
          </Typography>
        </Box>

        <Box className={timeStyle} mb={3} width={"15%"}>
          <Typography variant="caption">{time}</Typography>
        </Box>
      </Box>
    </CardActionArea>
  );
};

export default ListItem;
