import React, { useEffect, useState } from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { Route, Routes } from "react-router";
import Router from "./Components/Router";
import Login1 from "./Components/Login1";
import Home from "./Components/Home";
import Navbar1 from "./Components/Navbar1";
import "./App.css";
import Cart from "./Components/Cart";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [getlogindata, setgetlogindata] = useState(false);
  const Navigate2 = useNavigate();
  const [search, setsearch] = useState([]);


  useEffect(() => {
    let aaa = JSON.parse(localStorage.getItem("Login"));
    if (aaa) {
      setgetlogindata(true);
    }
  }, []);

  const handellogout = () => {
    localStorage.removeItem("Login");
    setgetlogindata(false);
    Navigate2("/");
  };

  return (
    <>
      {/* <Router/> */}
      {/* <Navbar1/> */}
      {/* {getlogindata && <Navbar1 handellogout={handellogout} />} */}
      <Navbar1 setsearch={setsearch} />
      <Routes>
        <Route path="/Signup" element={<Signup />}>
          {" "}
        </Route>
        <Route path="/" element={<Login />}>
          {" "}
        </Route>
        <Route path="/Login1" element={<Login1 />}>
          {" "}
        </Route>
        <Route path="/Home" element={<Home  search={search}/>}>
          {" "}
        </Route>
        <Route path="/Cart" element={<Cart />}>
          {" "}
        </Route>
      </Routes>
    </>
  );
};

export default App;
