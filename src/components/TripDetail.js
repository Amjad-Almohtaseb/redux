import { TripWrapper } from "../styles";

const TripDetail = (props) => {
  const trip = props.trip;
  const setTrip = props.setTrip;
  return (
    <TripWrapper>
      <h1> {trip.name}</h1>
      <img src={trip.image} alt={trip.name} />
      <p>{trip.city}</p>
      <p>{trip.difficulty}</p>
      <p>{trip.rating}</p>
      <p>{trip.length}</p>

      <button onClick={() => setTrip(null)}>Go Back</button>
    </TripWrapper>
  );
};

export default TripDetail;
