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
          if (!currentItem.urlToImage) {
            return null;
          } else {
            return (
              <div className="card" key={index}>
                <img src={currentItem.urlToImage} alt="news" />
                <div className="content">
                  <a
                    className="title"
                    onClick={() => readMore(currentItem.url)}
                  >
                    {currentItem.title}
                  </a>
                  <p>{currentItem.description}</p>
                  <button onClick={() => readMore(currentItem.url)}>
                    Read More
                  </button>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default Card;
