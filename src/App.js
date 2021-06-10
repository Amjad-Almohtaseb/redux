import TripList from "./components/TripList";
import TripDetail from "./components/TripDetail";
import { useState } from "react";
import "./App.css";
import trips from "./trips";

function App() {
  const [trip, setTrip] = useState(null);
  const [_trips, setTrips] = useState(trips);

  const setView = () => {
    if (trip) return <TripDetail trip={trip} setTrip={setTrip} />;
    else return <TripList setTrip={setTrip} trips={_trips} />;
  };
  return setView();
}

export default App;
