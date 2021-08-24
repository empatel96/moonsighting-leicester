import { Link } from "react-router-dom";

const LocationsList = ({ locations, title }) => {
  return (
    <div className="locations-list">
      <h2>{title}</h2>
      {locations
        .sort((a, b) => (a.properties.name > b.properties.name ? 1 : -1))
        .map((location) => (
          <div className="location-preview" key={location._id}>
            <Link to={`/locations/${location._id}`}>
              <h3>{location.properties.name}</h3>
              {/* <p>{location.properties.description}</p> */}
            </Link>
          </div>
        ))}
      {/* {locations.features.map((location, i) => (
        <div className="location-preview" key={i}>
          <Link to={`/locations/${i}`}>
            <h2>{location.properties.name}</h2>
            <p>{location.properties.description}</p>
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export default LocationsList;
