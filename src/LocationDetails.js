import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React, { useState, useEffect } from "react";

const LocationDetails = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "http://localhost:3000/record/" + id
  );
  const [location, setLocation] = useState(null);

  const [url, setUrl] = useState(null);
  // if (!isPending && !location) {
  //   setLocation(data.features[id]);
  // }
  useEffect(() => {
    if (data) {
      setLocation(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (location) {
      const longitude = location.geometry.coordinates[0];
      const latitude = location.geometry.coordinates[1];
      setUrl(
        `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
      );
    }
  }, [location]);

  const history = useHistory();
  const handleClick = () => {
    window.open(url, "_blank").focus();
  };

  return (
    <div className="location-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {location && (
        <article>
          <h2>{location.properties.name}</h2>
          <p>Details: {location.properties.description}</p>
          <button onClick={handleClick}>View on Google Maps</button>
        </article>
      )}
    </div>
  );
};

export default LocationDetails;
