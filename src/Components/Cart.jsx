import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const Cart = () => {
  const [getdata, setgetdata] = useState([]);

  useEffect(() => {
    let aaa = JSON.parse(localStorage.getItem("cart")) || [];
    setgetdata(aaa);
  }, []);

  const handeldelete = (i) => {
    let aaa = [...getdata];
    aaa.splice(i, 1);
    setgetdata(aaa);
    localStorage.setItem("cart", JSON.stringify(aaa));
  };

  return (
    <>
      <div className="d-flex flex-wrap justify-content-around text-center">
        {getdata.map((e, i) => {
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
                <div
                   style={{
                    height: "30px",
                   cursor:"pointer",
                    backgroundColor: "white",
                    padding: "2px",
                  alignItems:"end",
              width:"35px",
            marginLeft:"160px",
          borderRadius:"5px"}}
                    className="Delete"
                  onClick={() => handeldelete(i)}
                >
                  <MdOutlineDelete style={{ fontSize :"x-large"}} />
                </div>        
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
