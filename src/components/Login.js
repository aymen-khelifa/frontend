import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  reset } from "../features/authSlice";
import GoogleLogin from 'react-google-login' ;
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props' 
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from "./img/facebook-icon.png"
import logog from "./img/google.png"
import './login.css'
const handleFacebookResponse = (response) => {
  console.log(response);
  // handle Facebook login response
};
const responseGoogle = (response) => {
  console.log(response);
}


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const handleSubmit = async (e) => {
    e.preventDefault();
          await axios.post('http://localhost:5000/users/Login', {
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
              console.log("user logged successfully")
            }
            
            }).catch(err=>{
          console.log("user non trouvé")
        });
    
    }
      


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/AddFormateur");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',border:1,
          padding:3,paddingTop:4,paddingBottom:10,
        }}
      >
        
        <Typography className="aaz" component="h1" variant="h5">
           Bienvenue
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id="form1">
        {isError && <p className="has-text-centered">{message}</p>}
          <label>ADRESSE E-MAIL</label>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            placeholder="nom@email.com"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>MOT DE PASSE</label>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            placeholder="saisissez votre mot de passe"
            onChange={(e) => setPassword(e.target.value)}

          />
          <Grid item xs>
              <Link href="/users/" color={'black'} underline="none" id="oubli" variant="body2" className="oubli">
                mot de passe oublié?
              </Link>
            </Grid>
          
          <button
            type="submit"
            fullWidth
            variant="contained" 
            sx={{ mt: 3, mb: 2 }} className="connexion"
          >
            Connexion
          </button>
          <label className="ou">OU</label>
          <div className="divg" sx={{ mt: 3, mb: 2 }}>

           <GoogleLogin  
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            render={renderProps => (
            <button  fullWidth  onClick={renderProps.onClick} className="GoogleLogin" >
            <img src={logog} alt="Logo" width={20} height={20} className="logog" />Continuer avec google</button>
            )}
            buttonText="Login"
           onSuccess={responseGoogle}
            onFailure={responseGoogle}
           />           
            </div>   
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
          <Grid container>
             
            <Grid item>
              <p className="p">Vous n'avez pas un compte ? <Link fontSize={13.9} color={'black'} href="./Registrer" underline="none" variant="body2" className="pasuncopmte">
                 S'inscrire
              </Link></p>
            </Grid>
          </Grid>
         
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
);
};

export default Login;