import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
function MyNews() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=679aa0c8057d419b8d0538505258578d"
      )
      .then((res) => {
        console.log(res.data.articles, "data");
        setNews(res.data.articles);
      });
  }, []);
  const selectPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };
  return (
    <>
      <div className="container d-flex flex-wrap ">
        {news &&
          news.slice(page * 8 - 8, page * 8).map((val) => {
            return (
              <>
                <div className="card col-3 ">
                  <img
                    src={val.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">{val.description}</p>
                    <a href="#" className="btn btn-primary">
                      Watach Later
                    </a>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      {news.length > 0 && (
        <div className="pagination">
          <span onClick={() => selectPageHandler(page - 1)}>◀️</span>
          <span onClick={() => selectPageHandler(1)}>1</span>
          <span onClick={() => selectPageHandler(2)}>2</span>
          <span onClick={() => selectPageHandler(3)}>3</span>
          <span onClick={() => selectPageHandler(4)}>4</span>
          <span onClick={() => selectPageHandler(5)}>5</span>

          <span onClick={() => selectPageHandler(page + 1)}>▶️</span>
        </div>
      )}
    </>
  );
}
export default MyNews;
