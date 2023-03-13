import React, { useState } from "react";
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

import { Snackbar, Alert} from "@mui/material";


 

const Activercompte = () => {
  const navigate = useNavigate();
  const [err , setErr] = useState("");
  const [success , setSuccess] = useState("");
   const handleSubmit = async (e) => {
    e.preventDefault();
          await axios.get('http://localhost:5000/users/activationpage/:activationCode', {
          
          
        }, {
          
          
        },{
             headers: {'X-Requested-With': 'XMLHttpRequest', 
             "content-type":"application/json", "Access-Control-Allow-Origin": "http://localhost:5000", 
             "Access-control-request-methods":"POST, GET, DELETE, PUT, PATCH, COPY, HEAD, OPTIONS"}, 
            "withCredentials": true 
          }
          
          ).then((response) => {
            const msg = response.data.message;
            if (msg==="le code d'activation semble étre faux !")
            {console.log(msg);setErr(msg);setTimeout(()=>{navigate("/registrer")},2000);}
            else if (msg==="Votre compte est déja activé !")
            {console.log(msg);setErr(msg);setTimeout(()=>{navigate("/Login")},2000);}
            else if (msg===" Votre compte est activé avec succées !")
            {console.log(msg);setSuccess(msg);setTimeout(()=>{navigate("/Login")},2000);}
            else{setErr("erreur");}
            
           
        }).catch(err => {
            console.log(err);
            setErr("erreur");
        });
  
        
    
    }
      


 
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
           confirmer votre compte
        </Typography>
        <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }} id="form1">
       
          
          
          <button
            type="submit" 
            fullWidth
            variant="contained" 
            sx={{ mt: 3, mb: 2 }} className="connexion"
          >
            confirmer
          </button>
         
          <Grid container>
             
            
          </Grid>
         
        </Box>
      </Box>
    </Container>
    <Snackbar autoHideDuration={2500} open={ err === "" ? false : true } onClose={()=>{ setErr("") }}  >
        <Alert variant="filled" severity="error" onClose={()=>{ setErr("") }} >
          {
            err
          }
        </Alert>
      </Snackbar>
      <Snackbar autoHideDuration={2500} open={ success === "" ? false : true } onClose={()=>{ setSuccess("") }}  >
        <Alert variant="filled" severity="success" onClose={()=>{ setSuccess("") }} >
          {
            success
          }
        </Alert>
      </Snackbar>
  </ThemeProvider>
);
};

export default  Activercompte ;