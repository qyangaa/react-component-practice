//reference: https://github.com/the-road-to-learn-react/react-local-storage-cache/blob/master/src/App.js

import React, { useState } from "react";
import axios from "axios";

export default function Cache() {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    const cachedQuery = localStorage.getItem(query);
    if (cachedQuery) {
      alert("found in cache!");
      setHits(JSON.parse(cachedQuery));
    } else {
      axios
        .get("https://hn.algolia.com/api/v1/search?query=" + query)
        .then((response) => {
          console.log(response.data);
          setHits(response.data.hits);
          localStorage.setItem(query, JSON.stringify(response.data.hits));
        });
    }
  };

  return (
    <div>
      <form action="search" onSubmit={onSearch}>
        <input type="text" onChange={(e) => setQuery(e)} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setHits([])}>Clear</button>
      {hits.map((item) => (
        <div key={item.objectID}> {item.title} </div>
      ))}
    </div>
  );
}
