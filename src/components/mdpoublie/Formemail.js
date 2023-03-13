import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Formmdpoublie.css'

import axios from "axios";
const FormEmailmdp = () => {
  const [email, setEmail] = useState("");
 
  //const navigate = useNavigate();


  const { id } = useParams();


  const updateUser = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/users/getmail', {
        email: email,
       
      },{
           headers: {'X-Requested-With': 'XMLHttpRequest', 
           "content-type":"application/json", "Access-Control-Allow-Origin": "http://localhost:5000", 
           "Access-control-request-methods":"POST, GET, DELETE, PUT, PATCH, COPY, HEAD, OPTIONS"}, 
           "withCredentials": true 
        }
        
        ).then(
        console.log("msg"))
        .catch(err=>{
        console.log(err)
      });
  
    
  };
  const theme = createTheme();


  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border:1,
          padding:3,paddingTop:6,
        }}
      >
        <Typography component="h1" variant="h5" href='/mdpoublie'>
         mot de passe oublié
        </Typography>
        <Box component="form"  noValidate onSubmit={updateUser} sx={{ mt: 4 }} id="form">
          <Grid container spacing={2}>
           
            <Grid item xs={12}  > 
              <label>ADRESSE E-MAIL</label>
              <TextField
                name="email" 
                required
                fullWidth  
                id="email"
                placeholder="nom@email.com"
                autoFocus
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </Grid>
          
            
            
          </Grid>
          <button 
            type="submit"
            fullWidth
            variant="contained" 
            sx={{ mt: 3, mb: 2 }} className="confirmer"
          >
            Confirmer 
          </button>
           
          
         
        </Box>
      </Box>
      
    </Container>
  </ThemeProvider>
  );
};

export default FormEmailmdp;