import React from "react";
import { asField, Form, Text } from "informed";
import { IconButton, Button, Box, makeStyles, fade } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  search: {
    border: "hidden",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.6)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },

  inputInput: {
    fontSize: 18,
    border: "hidden",
    "&:focus": {
      outline: "none"
    },
    backgroundColor: "transparent",
    padding: theme.spacing(2, 1, 2, 2),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%"
    }
  }
}));

const SearchInput = asField(({ ...props }) => {
  const {
    placeholder,
    className,
    containerClassName,
    onSearchSubmit,
    icon,
    button,
    handleSearch
  } = props;

  let formApi;

  const getFormApi = api => {
    formApi = api;
  };
  const handleSubmit = val => {
    if (!val.search) {
      return;
    }
    onSearchSubmit(val);
    formApi.reset();
  };

  const classes = useStyles();
  return (
    <Form
      getApi={getFormApi}
      className={containerClassName || classes.search}
      onSubmit={handleSubmit}
    >
      <Box display="flex" justifyContent="space-between">
        <Text
          placeholder={placeholder || "Search..."}
          field="search"
          className={className || classes.inputInput}
        />
        {icon && (
          <IconButton type="submit" aria-label="search" color="primary">
            <SearchIcon />
          </IconButton>
        )}
        {button && (
          <Button
            onClick={handleSearch}
            variant="contained"
            color="primary"
            disableElevation
          >
            Search
          </Button>
        )}
      </Box>
    </Form>
  );
});

export default SearchInput;
