import React, { useState } from "react";
import arr from "./Products.json";
import Navbar1 from "./Navbar1";

const Home = ({search}) => {
  const [search1, setsearch1] = useState([]);
  const [array, setarray] = useState([]);
  // setsearch1(localStorage.getItem("search") )

  const handelcart = (e) => {
    let aaa = [...array];
    let bbb = aaa.concat(e);
    setarray(bbb);
    localStorage.setItem("cart", JSON.stringify(bbb));
  };

  return (
    <>
      {/* <Navbar1 /> */}




      {search.length===0?<div className="d-flex flex-wrap justify-content-around text-center">
        {arr.map((e, i) => {
          return (
            <div style={{ marginTop: "100px" }}>
              <div
                className="m-4 b boxhover"
                style={{
                  border: "1px solid black",
                  padding: "15px",
                  boxShadow: "10px 10px 5px lightblue",
                  borderRadius: "5px",
                }}
              >
                <img
                  src={e.image}
                  alt=""
                  style={{ height: "200px" }}
                  className="shadow-pill Image"
                />
                <h3>{e.productName}</h3>
                <p>{e.brand}</p>
                <p>${e.price}</p>
                <p>Category:{e.category}</p>
                <button
                  onClick={() => handelcart(e)}
                  style={{
                    width: "200px",
                    padding: "5px",
                    border: "1px solid black",
                    backgroundColor: "white",
                    borderRadius:"5px"
                  }}
                  className="cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      :

      <div className="d-flex flex-wrap justify-content-around text-center">
        {search.map((e, i) => {
          return (
            <div style={{ marginTop: "100px" }}>
              <div
                className="m-4 b boxhover"
                style={{
                  border: "1px solid black",
                  padding: "15px",
                  boxShadow: "10px 10px 5px lightblue",
                  borderRadius: "5px",
                }}
              >
                <img
                  src={e.image}
                  alt=""
                  style={{ height: "200px" }}
                  className="shadow-pill Image"
                />
                <h3>{e.productName}</h3>
                <p>{e.brand}</p>
                <p>${e.price}</p>
                <p>Category:{e.category}</p>
                <button
                  onClick={() => handelcart(e)}
                  style={{
                    width: "200px",
                    padding: "5px",
                    border: "1px solid black",
                    backgroundColor: "white",
                    borderRadius:"5px"
                  }}
                  className="cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>}
    </>
  );
};

export default Home;
