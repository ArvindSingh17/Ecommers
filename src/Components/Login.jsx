import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setdata] = useState({ email: "", password: "" });
  const [err, seterr] = useState({});
  const [err1, seterr1] = useState({});

  let Emailregex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  let passwordregex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  const handelchange1 = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const click1 = () => {
    if (verify()) {
      let xxx = JSON.parse(localStorage.getItem("Signup")) || [];
      let vvv = xxx.find((e) => {
        return e.email === data.email && e.password === data.password;
        localStorage.setItem("Login", JSON.stringify(data));
        setdata({ email: "", password: "" })
      });
      navigate("/home")
    } else {
      alert("dtrsrs");
    }
  };

  const verify = () => {
    let localerr = {};
    let valid = true;

    if (data.email.length === 0) {
      localerr.email = "Please Enter Your email";
      valid = false;
    } else if (!Emailregex.test(data.email)) {
      localerr.email = "Invalid Email ";
      valid = false;
    } else if (err1.email) {
      alert("Wrong email");
      // localerr.email = "Wrong Email";
      valid = false;
    }

    if (data.password.length === 0) {
      localerr.password = "Please Enter Your Password";
      valid = false;
    } else if (!passwordregex.test(data.password)) {
      localerr.password = "Invalid password ";
      valid = false;
    } else if (err1.password) {
      alert("Wrong Password");
      // localerr.password = "Wrong password";
      valid = false;
    }

    seterr(localerr);
    return valid;
  };
  return (
    <>
      <div className=" bg-light w-25 container shadow py-4 rounded mt-5 ">
        <h3 style={{ fontFamily: "cursive", textAlign: "center" }}>Login</h3>

        <div>
          <label
            htmlFor=""
            style={{
              marginTop: "10px",
              fontSize: "20px",
              fontWeight: "bolder",
              color: "#1b191994",
            }}
          >
            Email
          </label>
          <br />
          <input
            type="email"
            style={{ width: "280px" }}
            onChange={handelchange1}
            name="email"
            value={data.email}
          />
        </div>
        {err.email && <p>{err.email}</p>}
        <div>
          <label
            htmlFor=""
            style={{
              marginTop: "10px",
              fontSize: "20px",
              fontWeight: "bolder",
              color: "#1b191994",
            }}
          >
            Password
          </label>
          <br />
          <input
            type="text"
            style={{ width: "280px" }}
            onChange={handelchange1}
            name="password"
            value={data.password}
          />
        </div>
        {err.password && <p>{err.password}</p>}

        <button className="btn btn-danger mt-3 item-center" onClick={click1}>
          Submit
        </button>
        <br />
        <br />

        <Link to="Signup">Create Your Account</Link>
      </div>
    </>
  );
};

export default Login;
