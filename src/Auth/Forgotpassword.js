import React from "react";
import {Box, Button, TextField} from "@mui/material"

const Forgotpassword=()=>
{
      return (
        <>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off" className="register">

            <Box className="header_title">Forget</Box>     

            <Box className="signUp">  

           <TextField
           type="email"
           required
           id="email"
           variant="standard"
           label="Enter Moblie Number"
        />

         <TextField
          type="password"
          required
           variant="standard"
          id="password"
          label="Enter Password"
        />
        
            
         <Box className="forgotpassword">
            <Box className="forgot">Forgot Password</Box>
         </Box>
          
          <Button className="primary_button">Register</Button>
            
         <Box className="account">
            <Box>Already an account</Box>
            <Box className="forgot">Login</Box>
         </Box>

          </Box> 
        
        </Box> 
        </>
      )
}

export default Forgotpassword;