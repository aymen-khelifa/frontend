

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import GoogleLogin from 'react-google-login' ;
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props' 
import './register.css'
import logo from "./img/facebook-icon.png"
import logog from "./img/google.png"
import axios from "axios";
import { validateName,validateEmail,validatePassword }  from "./Validation";
 

const handleFacebookResponse = (response) => {
  console.log(response);
  // handle Facebook login response
};
const responseGoogle = (response) => {
  console.log(response);
}

const Registrer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err , setErr] = useState("");
  const [success , setSuccess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  
  const Auth = async (e) => {
      e.preventDefault();
        await axios.post('http://localhost:5000/users/register', {
        name: name,
        email: email,
        password: password
        
      },{
           headers: {'X-Requested-With': 'XMLHttpRequest', 
           "content-type":"application/json", "Access-Control-Allow-Origin": "http://localhost:5000", 
           "Access-control-request-methods":"POST, GET, DELETE, PUT, PATCH, COPY, HEAD, OPTIONS"}, 
          "withCredentials": true 
        }
        
        ).then(res=>{
          if (res.status===200){
            console.log("success");
            alert("user created successfully")
          }
        },).catch(err=>{
        console.log("user already exist");
            alert("user already exist")
      });
  
  }



   

    //

    
  
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop:  4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border:1,
          padding:3,paddingTop:4,
        }}
      >
        <Typography   component="h1" variant="h5">
          S'inscrire
        </Typography>
        <Box component="form"  Validate onSubmit={Auth} sx={{ mt: 4 }} className="form">
          <Grid container spacing={2}>
           
            <Grid item xs={12}  > 
              <label>NOM  COMPLET</label>
              <TextField
                autoComplete="given-name"
                name="NOM COMPLET" 
                required 
                fullWidth  
                id="nom"
                placeholder="Saisissez votre nom et prénom"
                autoFocus
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <label>ADRESSE E-MAIL</label>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="nom@email.com" type="email"
                name="email"
                
                value={email}
                onChange={(e)=> setEmail(e.target.value)}

              />
            </Grid>
            <Grid item xs={12}>
              <label>MOT DE PASSE</label>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="Créez votre mot de passe"
                type="password"
                id="password"
                value={password}
                autoComplete="new-password"
                onChange={(e)=> setPassword(e.target.value)}

              />
            </Grid>
            
            
          </Grid>
          <button 
            type="submit"
            fullWidth
            variant="contained" 
            sx={{ mt: 3, mb: 2 }} className="inscrivez"
          >
            Inscrivez-vous 
          </button>
            <label className="ou">OU</label>

           <div className="divg" sx={{ mt: 3, mb: 2 }}> 
           

           <GoogleLogin  
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          render={renderProps => (
          <button  fullWidth  
          onClick={renderProps.onClick} 
          className="GoogleLogin" ><img src={logog} alt="Logo" width={20} height={20} id="logog" />Continuer avec google</button>
          )}
            buttonText="Login"
          onSuccess={responseGoogle}
            onFailure={responseGoogle}
           /></div> 


          <div className="divf" sx={{ mt: 3, mb: 2 }}  >
          <FacebookLogin 
          appId="1088597931155576"
          autoLoad
          callback={handleFacebookResponse}
          render={renderProps => (
           <button className="btn-facebook" fullWidth onClick={renderProps.onClick}>Continuer avec Facebook</button>
            )}
          /></div>
            <img src={logo} alt="Logo" width={20} height={20} className="logof" /> 
             <Grid container justifyContent="flex-end">
            <Grid item>
              <p className="p"> Vous avez deja un compte? <Link underline="none" type="submit" fontSize={13.9} color={'black'} href="/Login" variant="body2">
               Se connecter
              </Link></p>
            </Grid>
          </Grid>
        </Box>
      </Box>
      
    </Container>
  </ThemeProvider>
  );
};

export default Registrer;