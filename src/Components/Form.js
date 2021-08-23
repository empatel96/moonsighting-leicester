import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleErrors = (e) => {
    e.forEach((error) => {
      alert(`Invalid ${error.param}`);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      name,
      mobile,
      location,
      url,
      details,
    };
    setIsPending(true);
    // make post request
    fetch("http://localhost:8443/record/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setIsPending(false);
        if (data.errors.length) {
          handleErrors(data.errors);
        } else {
        }
        // history.go(-1); // go back one page
        // Go home
        //   history.push('/')
      })
      .catch((e) => {
        setIsPending(false);
        console.warn(e);
        alert("There was an error");
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location name or coordinates"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <input
        type="url"
        name="location_url"
        placeholder="Location URL"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <textarea
        name="details"
        cols="30"
        rows="10"
        placeholder="Details"
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
        }}
      ></textarea>
      {!isPending && <button>Submit</button>}
      {isPending && <button disabled>Submitting Form...</button>}
    </form>
  );
};

export default Form;
