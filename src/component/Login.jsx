import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "@mui/material";
import { Paper } from "@mui/material";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import { ButtonUnstyled } from "@mui/base";
import { useState } from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
const[disabled,setDisabled]=useState(true);
  function loginform() {
  
    var data = JSON.stringify({
      email: email,
      password: password,
    });
    var config = {
      method: "post",
      url: "https://reqres.in/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  console.log(email, password);
  const Avatarstyle = {
    backgroundColor: "blue",
    height: "46px",
    width: "44px",
    borderRadius: "70%",
    marginTop: "5px",
  };
  const btnstyle = { margin: "8px 0" ,width:'94%', height: "40px",};

  return (
    <>
      <div  style={{height:'70px',width:'97%',display: "grid", justifyContent: "center" }}>
        <div style={{ display: "grid", justifyContent: "center" }}>
          <div style={Avatarstyle}>
            <LockOpenRoundedIcon
              style={{
                paddingLeft: "4px",
                paddingTop: "4px",
                color: "white",
                height:'42px',
                width:'42px'
              }}
            />
          </div>
          <h2 style={{ marginTop: "0px" }}>Login </h2>
        </div>
        <div>
         <form style={{paddingLeft:'15px'}}>
         <input
                name="email"
                type="email"
                value={email}
                placeholder="Enter your email"
               onChange={(e)=>setemail(e.target.value)}
                style={{
                  width: "90%",
                  height: "40px",
                  paddingLeft:'5px'
                }}
              />
              <input
                name="password"
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e)=>setpassword(e.target.value)}
                style={{
                  width: "90%",
                  height: "40px",
                  marginTop: "10px",
                  paddingLeft:'5px'
                }}
              />
               <Button
            type="submit"
          disabled={email&&password?false:true}
            color="primary"
            style={btnstyle}
            fullWidth
            onClick={()=>loginform()}
            variant="contained"
          >
            Log in
          </Button>
         
             
            
          <FormControlLabel
            label="Remember Me"
            control={<Checkbox name="checked" color="primary" />}
          />
          <Typography style={{ textAlign: "center" }}>Forgot Password</Typography>
          <Typography style={{ textAlign: "center" }}>Do you have an account?Sign up</Typography>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
