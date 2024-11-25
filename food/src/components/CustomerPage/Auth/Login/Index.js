import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './index.css'
import UserButton from '../../../Widgets/UserButton/Index'
const Login = () => {
  return (
    <>
    <div className="login">
    <Navbar/>
      <div className="logincontainer">
        <div className="form">
        <div className="formcontent">
          <label>Email</label>
          <input type="text" />
          <label>Password</label>
          <input type="text" />
          <div className="buttoncontainer">
            <UserButton bg="#41e683" color="black" jump="/login" name="Submit" />
            <UserButton
              bg="rgb(246, 23, 23)"
              color="white"
              name="New User"
              jump="/signup"
            />
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Login
