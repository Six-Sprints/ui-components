import React from "react";
import {
  Box,
  Typography,
  CardActionArea,
  Avatar,
  Badge,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
  },
}))(Badge);

const useStyles = makeStyles(theme => ({
  ellipsis: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  unseenStatusStyle: {
    color: theme.palette.primary.main,
    alignSelf: 'flex-end',
    backgroundColor: 'green'
  },
  timeStatusStyle: {
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'column'
  }
}));

const ListItem = ({
  status,
  handleClick,
  image,
  name,
  text,
  time,
  itemStyle,
  timeStyle,
  nameVariant = "h6",
  mobileNumber,
  mobileNumberVariant = "subtitle2",
  textVariant = "subtitle2",
  timeVariant = "caption",
  unseenMsgStatus
}) => {
  const classes = useStyles();
  // <StyledBadge
  //   overlap="circle"
  //   anchorOrigin={{
  //     vertical: 'bottom',
  //     horizontal: 'right',
  //   }}
  //   variant="dot"
  // >
  //   <Avatar alt="avatar-image" src={image} style={{ color: 'black' }}>
  //     {name.charAt(0)}
  //   </Avatar>
  // </StyledBadge>
  return (
    <CardActionArea onClick={handleClick} className={itemStyle}>
      <Box my={2} mx={1} display="flex" alignItems="center">
        <div className={classes.root}>
          {status ?
            <Avatar alt="avatar-image" src={image} style={{ color: 'black', marginRight: 8 }}>
              {name.charAt(0)}
            </Avatar> :
            <Avatar alt="avatar-image" src={image} style={{ marginRight: 8 }}>
              {name.charAt(0)}
            </Avatar>}
        </div>

        <Box width={"60%"} mx={2}>
          <Typography className={classes.ellipsis} variant={nameVariant}>
            {name}
          </Typography>
          <Typography
            className={classes.ellipsis}
            variant={mobileNumberVariant}
          >
            {mobileNumber}
          </Typography>
          <Typography className={classes.ellipsis} variant={textVariant}>
            {text}
          </Typography>
        </Box>

        <Box display='flex' flexDirection="column" justifyContent="flex-start">
          <Typography variant={timeVariant} >{time}</Typography>
          {unseenMsgStatus ? <FiberManualRecordIcon color="primary" /> : <div>{''}</div>}
        </Box>
      </Box>
    </CardActionArea>
  );
};

export default ListItem;
