import React from "react";
import "./index.css";
import UserButton from "../../../Widgets/UserButton/Index";
import Navbar from "../../Navbar/Navbar";
const Signup = () => {
  return (
    <>
    <div className="signup">
    <Navbar/>
      <div className="Signupcontainer">
        <div className="form">
        <div className="formcontent">
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>Address</label>
          <input type="text" />
          <p>Click For Current Location</p>
          <label>Password</label>
          <input type="text" />
          <div className="buttoncontainer">
            <UserButton bg="#41e683" jump="/signup" color="black" name="Submit" />
            <UserButton
              bg="rgb(246, 23, 23)"
              color="white"
              name="Already a User"
              jump="/login"
            />
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
