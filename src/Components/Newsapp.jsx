import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {
  const [search, setSearch] = useState("nepal"); // stores live user input
  const [debouncedSearch, setDebouncedSearch] = useState(search); // stores debounced value
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "95e4f2fa862e4207b228bd4fc328e129";

  // 🔹 Function to fetch data from API
  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${debouncedSearch}&apiKey=${API_KEY}`
      );
      const responseJson = await response.json();
      console.log(responseJson.articles);
      setNewsData(responseJson.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // 🔹 Handles typing in the search input
  const handleInput = (e) => {
    setSearch(e.target.value); // updates live input immediately
  };

  // 🔹 Debouncing effect
  useEffect(() => {
    // ⏳ Wait for 500ms after typing stops before updating debouncedSearch
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    // ❌ If user types again before 500ms, clear the previous timer
    return () => {
      clearTimeout(handler);
    };
  }, [search]); // runs whenever the 'search' value changes

  // 🔹 Fetch news data only when debouncedSearch changes
  useEffect(() => {
    if (debouncedSearch) {
      getData();
    }
  }, [debouncedSearch]); // avoids frequent API calls during typing

  // 🔹 Handles button category clicks
  const userInput = (e) => {
    setSearch(e.target.value); // directly updates search (debounce will handle timing)
  };

  return (
    <div>
      <nav>
        <div>
          <h1
            onClick={() => {
              setSearch("nepal"); // reset to default topic
            }}
            style={{ cursor: "pointer" }}
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
            onChange={handleInput} // live input updates
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
