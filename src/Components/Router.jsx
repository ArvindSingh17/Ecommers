import React from "react";
import { Link } from "react-router-dom";

const Router = () => {
  return (
    <>
      <div className="container bg-dark rounded-pill py-2">
        <div className="d-flex justify-content-around ">
            <Link to="/Signup">Signup</Link>
            <Link to="/Login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Router;
