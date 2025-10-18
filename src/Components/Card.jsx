import React from "react";

const Card = ({ data }) => {
  console.log(data);

  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div className="cardContainer">
      {data &&
        data.map((currentItem, index) => {
          return (
            <div className="card">
              <img src={currentItem.urlToImage} alt="news" />
              <div className="content">
                <a className="title">{currentItem.title}</a>
                <p>{currentItem.description}</p>
                <button onClick={() => readMore(currentItem.url)}>
                  Read More
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
