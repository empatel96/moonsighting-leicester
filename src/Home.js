import React, {useEffect} from "react";
import LocationsList from "./Components/LocationsList";
// import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // const { data, isPending, error } = useFetch("./leicester-moonsighting.json");
  const { data, isPending, error } = useFetch("http://35.178.169.152:8443/record")
  // useEffect(() => {
  // }, [data])
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <LocationsList locations={data} title="All Locations" />}
    </div>
  );
};

export default Home;
