import axios from "axios";
import React, { useEffect, useState } from "react";

function Pagination() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=679aa0c8057d419b8d0538505258578d"
      )
      .then((response) => {
        console.log(response.data.articles);
        setProduct(response.data.articles);
      });
  }, []);

  return (
    <>
      <div className="products">
        {product.map((prod) => {
          return (
            <div className="Main-container ">
              <div className="sub-container">
                <p>{prod.title}</p>
                <img src={prod.urlToImage} alt="..." />
                <h6>{prod.description}</h6>;
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Pagination;
