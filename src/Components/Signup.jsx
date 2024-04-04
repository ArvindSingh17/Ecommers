import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [err, seterr] = useState({});
  const [array, setarray] = useState([]);
  const [err1, seterr1] = useState("")

  let Emailregex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  let passwordregex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  const handelchange1 = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const navigate=useNavigate()

  const click1 = () => {
    if (verify()) {
      let aaa = JSON.parse(localStorage.getItem("Signup")) || [];
      let bbb = aaa.find((e) => {
        return e.email === data.email;
        
      });
      if (!bbb) {
        let abc = [...array];
        let def = abc.concat(data);
        setarray(def);
        setdata({ name: "", email: "", password: "", confirm: "" });

        localStorage.setItem("Signup", JSON.stringify(def));
        
      }
      else{
        seterr1(bbb.email)
      }
      
     
    }
    navigate("/")
  };
  const verify = () => {
    let localerr = {};
    let valid = true;
    if (data.name.length === 0) {
      localerr.name = "Please Enter Your Name";
      valid = false;
    } else if (data.name.length < 5) {
      localerr.name = "Invalid Name ";
      valid = false;
    }
    if (data.email.length === 0) {
      localerr.email = "Please Enter Your email";
      valid = false;
    } else if (!Emailregex.test(data.email)) {
      localerr.email = "Invalid Email ";
      valid = false;
    }
    else if(err1){
      localerr.email="Email Allreday Exist"
      valid = false
    }

    if (data.password.length === 0) {
      localerr.password = "Please Enter Your Password";
      valid = false;
    } else if (!passwordregex.test(data.password)) {
      localerr.password = "Invalid Name ";
      valid = false;
    }

    if (data.confirm.length === 0) {
      localerr.confirm = "Please Enter Your Confirm Password";
      valid = false;
    } else if (data.password !== data.confirm) {
      localerr.confirm = "Password is not match ";
      valid = false;
    }

    seterr(localerr);
    return valid;
  };
  return (
    <>
      <div className=" bg-light w-25 container shadow py-4 rounded mt-5 ">
        <h3 style={{ fontFamily: "cursive", textAlign: "center" }}>Sign Up</h3>
        <div>
          <label
            htmlFor=""
            style={{
              fontSize: "20px",
              color: "#1b191994",
              fontWeight: "bolder",
            }}
          >
            Name
          </label>
          <br />
          <input
            type="text"
            style={{ width: "280px" }}
            onChange={handelchange1}
            name="name"
            value={data.name}
          />
        </div>
        {err.name && <p className="text-danger">{err.name}</p>}
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
        {err.email && <p className="text-danger">{err.email}</p>}
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
        {err.password && <p className="text-danger">{err.password}</p>}
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
            Confirm Password
          </label>
          <br />
          <input
            type="text"
            style={{ width: "280px" }}
            onChange={handelchange1}
            name="confirm"
            value={data.confirm}
          />
        </div>
        {err.confirm && <p className="text-danger">{err.confirm}</p>}
        <button className="btn btn-dark mt-3 item-center" onClick={click1}>
          Submit
        </button>
        <br />
        <br />

        <Link to="Login">Alreday Have an Account </Link>

      </div>
    </>
  );
};

export default Signup;
