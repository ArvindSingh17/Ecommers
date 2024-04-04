import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import arr from "./Products.json";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar1 = ({ setsearch }) => {
  const [data, setdata] = useState("");

  let location = useLocation();
  const shownavbar =
    location.pathname === "/" || location.pathname === "/Signup";

  const handelchange = (e) => {
    setdata(e.target.value);
  };

  const navigate = useNavigate();

  const handelsearch = () => {
    let abc = arr.filter((e) => {
      return (
        e.productName.toLowerCase().includes(data.toLowerCase()) ||
        e.category.toLowerCase().includes(data.toLowerCase()) ||
        e.brand.toLowerCase().includes(data.toLowerCase())
      );
    });
    setsearch(abc);
  };

  const handeldropdown = (e) => {
    setdata(e.target.value);

    let ttt = arr.filter((z) => {
      return z.category.includes(e.target.value);
    });
    setsearch(ttt);
  };

  const handelcart1 = () => {
    navigate1("/cart");
  };

  const navigate1 = useNavigate();

  const handellogout = () => {
    localStorage.removeItem("Login");
    navigate1("/");
  };

  return (
    <>
      {!shownavbar && (
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            display: "flex",
            height: "100px",
            position: "fixed",
          }}
        >
          <div style={{ width: "20%", border: "", textAlign: "center" }}></div>
          <div
            style={{
              width: "60%",
              border: "",
              textAlign: "center",
            }}
          >
            <div
              className="droprdown"
              style={{
                width: "50px",
                position: "relative",
                top: "45px",
                left: "78px",
              }}
            >
              <select
                name=""
                id=""
                onChange={handeldropdown}
                style={{
                  padding: "5.8px",
                  width: "50px",
                  backgroundColor: "white",
                  border: "1px solid black",
                }}
              >
                <option value="" disabled selected>
                  All
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Books">Books</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Sports">Sports</option>
                <option value="Movies">Movies</option>
                <option value="Toys">Toys</option>
                <option value="Beauty">Beauty</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
            {/* </button> */}
            <input
              type="text"
              style={{
                width: "60%",
                marginTop: "10px",
                padding: "5px",
                border: "1px solid black",
                borderRight: "0px",
              }}
              onChange={handelchange}
            />
            <button
              style={{
                padding: "5px",
                width: "40px",
                border: "1px solid black",
                borderLeft: "1px",
                backgroundColor: "white",
              }}
              onClick={handelsearch}
            >
              <IoSearch />
            </button>
          </div>
          <div
            style={{
              width: "20%",
              border: "",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <div
              style={{
                height: "30px",
                margin: "40px 6px 0px 0px",
                backgroundColor: "white",
                padding: "2px",
                alignItems: "center",
                borderRadius:"5px"
              }}
              className="Logout"
            >
              <PiShoppingCartSimpleLight
                className="icon"
                onClick={handelcart1}
              />
            </div>

            <div
              style={{
                height: "30px",
                margin: "40px 6px 0px 0px",
                backgroundColor: "white",
                padding: "2px",
                borderRadius:"5px"
              }}
              className="Logout"
              onClick={handellogout}
            >
              Logout <IoIosLogOut />
            </div>
          </div>
        </div>
      )}
      {/* {search.length>0?
      <div className="d-flex flex-wrap justify-content-around text-center">
        {search.map((e, i) => {
          return (
            <div style={{marginTop:"100px"}}>
              <div className="m-4 b boxhover" style={{border:"1px solid black",padding:"15px",boxShadow:"10px 10px 5px lightblue",borderRadius:"5px"}}>
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
              </div>
            </div>
          );
        })}
      </div>:<h1>Not Matched</h1>} */}
    </>
  );
};

export default Navbar1;
