import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {
  const [search, setsearch] = useState("nepal");
  const [newsData, setnewsData] = useState(null);
  const API_KEY = "95e4f2fa862e4207b228bd4fc328e129";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const responseJson = await response.json();
    console.log(responseJson.articles);
    setnewsData(responseJson.articles);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setsearch(e.target.value);
  };

  useEffect(() => {
    getData();
  }, [search]);

  const userInput = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1
            onClick={() => {
              setsearch("nepal"); // reset to default
              getData(); // fetch default news again
            }}
            style={{ cursor: "pointer" }} // makes it look clickable
          >
            Trending News
          </h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending News</a>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            value={search}
            placeholder="Search Your News Topic Here"
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className="head">Stay Tuned with Trending News</p>
      </div>

      <div className="categoryBtn">
        <button onClick={userInput} value={"sports"}>
          Sports
        </button>
        <button onClick={userInput} value={"entertainment"}>
          Entertainment
        </button>
        <button onClick={userInput} value={"politics"}>
          Politics
        </button>
        <button onClick={userInput} value={"health"}>
          Health
        </button>
        <button onClick={userInput} value={"fitness"}>
          Fitness
        </button>
      </div>

      <div>
        <Card data={newsData} />
      </div>
    </div>
  );
};

export default Newsapp;
