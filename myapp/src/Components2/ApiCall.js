import React, { useState, useEffect } from "react";

export default function ApiCall() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((err) => console.log(err));
  },[]);

  console.log(apiData);

  return <div></div>;
}
