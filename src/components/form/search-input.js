import React from "react";
import { asField, Form, Text } from "informed";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchInput = asField(({ ...props }) => {
  const {
    placeholder,
    className,
    containerClassName,
    onSearchSubmit,
    iconAlignLeft
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
    <Form getApi={getFormApi} onSubmit={handleSubmit}>
      <div className={containerClassName}>
        {iconAlignLeft && (
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        )}
        <Text
          placeholder={placeholder || "Search..."}
          field="search"
          className={className}
        />
        {!iconAlignLeft && (
          <IconButton type="submit" aria-label="search" color="primary">
            <SearchIcon />
          </IconButton>
        )}
      </div>
    </Form>
  );
});

export default SearchInput;
