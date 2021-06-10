import React from "react";
import "../App.css";
import trips from "../trips";

import TripItem from "./TripItem";
import { useState } from "react";
import SearchBar from "./SearchBar";

const TripList = (props) => {
  const [query, setQuery] = useState("");

  const tripList = props.trips
    .filter((trip) => trip.name.toUpperCase().includes(query.toUpperCase()))
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} setTrip={props.setTrip} />
    ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <div>{tripList}</div>;
    </div>
  );
};

export default TripList;
