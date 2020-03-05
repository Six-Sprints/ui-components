import React from "react";
import { asField, Form, Text } from "informed";
import { IconButton, Button, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
  return (
    <Form
      getApi={getFormApi}
      className={containerClassName}
      onSubmit={handleSubmit}
    >
      <Box display="flex" justifyContent="space-between">
        <Text
          placeholder={placeholder || "Search..."}
          field="search"
          className={className}
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
