import { Link } from "react-router-dom";

const LocationsList = ({ locations, title }) => {
  return (
    <div className="locations-list">
      <h2>{title}</h2>
      {locations.features.map((location, i) => (
        <div className="location-preview" key={i}>
          <Link to={`/locations/${i}`}>
            <h2>{location.properties.name}</h2>
            <p>{location.properties.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LocationsList;
