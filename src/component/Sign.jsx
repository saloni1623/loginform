import React from 'react'
import {FormControlLabel} from '@mui/material';
import {Checkbox} from '@mui/material';
import { useState } from "react";
import { Avatar, Button, Paper } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Grid, TextField, Typography } from '@mui/material'
function Sign() {
    const paperstyle={height:'65vh',width:290,padding:10}
    const logostyle={backgroundColor:"blue"}
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [number, setNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const Avatarstyle = {
      backgroundColor: "blue",
      height: "35px",
      width: "35px",
      borderRadius: "70%",
      marginTop: "5px",
      marginLeft:'90px',
      marginBottom:'0px'
    };
    const btnstyle = { margin: "8px 0" ,width:'94%', height: "40px",};
    return (
       <>
       <div className="container" style={{height:'70px',width:'97%',display: "grid", justifyContent: "center" }}>
        <div style={{ display: "grid", justifyContent: "center" }}>
          <div style={Avatarstyle} >
            <AddCircleIcon
              style={{
                paddingLeft: "4px",
                paddingTop: "4px",
                color: "white",
                height:'30px',
                width:'30px'
              }}
            />
          </div>
         
          <h2 style={{ marginTop: "0px" ,marginLeft:'60px',marginBottom:'0px'}}>Sign Up</h2>
        <p style={{marginTop:'0px'}}> Fill the form to create an account</p>
        </div>
        <div>
         <form style={{paddingLeft:'15px'}}>
          <div className='row '>
          <div className='col'>
          <input
                name="firstName"
                type="text"
                value={firstName}
                placeholder="Firstname"
               onChange={(e)=>setFirstName(e.target.value)}
                style={{
                  width: "100%",
                  height: "40px",
                marginBottom:'10px'
                }}
              />
          </div>
          <div className='col'>
          <input
                name="lastName"
                type="text"
                value={lastName}
                placeholder="Lastname"
                onChange={(e)=>setLastName(e.target.value)}
                style={{
                  width: "100%",
                  height: "40px",
                  marginBottom:'10px'
                  
                }}
              /></div>
          </div>
          <div className='row'>
              <div className='col'>
              <input
                name="email"
                type="email"
                value={email}
                placeholder="Email"
               onChange={(e)=>setemail(e.target.value)}
                style={{
                  width: "100%",
                  height: "40px",
                  marginBottom:'10px'
                }}
              />
              </div>
              <div className='col'>    
                <input
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e)=>setpassword(e.target.value)}
                style={{
                  width: "100%",
                  height: "40px",
                  marginBottom:'10px'
                }}
              />
              </div>
            </div>
           
               <input
                name="number"
                type="number"
                value={number}
                placeholder="Number"
               onChange={(e)=>setNumber(e.target.value)}
                style={{
                  width: "100%",
                  height: "40px",
                  paddingLeft:'5px'
                }}
              />
            
            
               <Button
            type="submit"
          disabled={email&&password&&firstName&&lastName&&number?false:true}
            color="primary"
            style={btnstyle}
            fullWidth
            // onClick={()=>loginform()}
            variant="contained"
          >
           SignUp
          </Button>
         
             
          <FormControlLabel
        label="I accept the terms and condition"
        control={
          <Checkbox 
            name = "checked"
            color = "primary"
          />
        }/>
        
          </form>
        </div>
      </div>
       </> 
    )
}

export default Sign
