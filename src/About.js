import React, { useEffect } from "react";
import Form from "./Components/Form";

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <article>
        <p>
          This site has been set up to allow people interested in sighting the
          new moon, a one stop place to get the details on locations in & around
          Leicester.
        </p>
        <p>
          <small>More coming soon...</small>
        </p>
      <Form />
      </article>

    </div>
  );
};

export default About;
