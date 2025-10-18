import React from "react";
import Card from "./Card";

const Newsapp = () => {
  return (
    <div>
      <nav>
        <div>
          <h1>Trending News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending News</a>
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="Search Your News Here" />
          <button>Search</button>
        </div>
      </nav>

      <div>
        <p className="head">Stay Tuned with Trending News</p>
      </div>

      <div className="categoryBtn">
        <button>Sports</button>
        <button>Entertainment</button>
        <button>Politics</button>
        <button>Health</button>
        <button>Fitness</button>
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
};

export default Newsapp;
