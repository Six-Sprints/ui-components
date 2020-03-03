import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import CalendarToday from "@material-ui/icons/CalendarToday";
import List from "@material-ui/icons/FormatListBulleted";

const CustomButtonGroup = ({ isList, handleClick }) => {
  return (
    <ButtonGroup
      style={{ margin: "0 1rem" }}
      color="primary"
      aria-label="outlined primary button group"
    >
      <Button onClick={handleClick} disabled={isList}>
        <List />
      </Button>
      <Button onClick={handleClick} disabled={!isList}>
        <CalendarToday />
      </Button>
    </ButtonGroup>
  );
};

export default CustomButtonGroup;
