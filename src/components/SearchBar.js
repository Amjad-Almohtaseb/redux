// Styling
import { SearchBarStyled } from "../styles";
import React from "react";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search for a trip name"
    />
  );
};

export default SearchBar;
