import { TripWrapper } from "../styles";

const TripItem = (props) => {
  const trip = props.trip;
  return (
    <TripWrapper>
      <img
        alt={trip.name}
        src={trip.image}
        onClick={() => props.setTrip(trip)}
      />
      <p>{trip.name}</p>
    </TripWrapper>
  );
};
export default TripItem;
