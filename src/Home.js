import React from "react";
import LocationsList from "./Components/LocationsList";
// import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("./leicester moonsighting.json");

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <LocationsList locations={data} title="All Locations" />}
    </div>
  );
};

export default Home;
