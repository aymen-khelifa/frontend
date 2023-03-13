import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
  import Button from '@mui/material/Button';
  import CssBaseline from '@mui/material/CssBaseline';
  import TextField from '@mui/material/TextField';
  import Grid from '@mui/material/Grid';
  import Box from '@mui/material/Box';
  import Typography from '@mui/material/Typography';
  import Container from '@mui/material/Container';
  import { createTheme, ThemeProvider } from '@mui/material/styles';
  import {MenuItem, Select,Snackbar,Alert} from "@mui/material";
  import Option from "@mui/joy/Option";
import './ajouteradmin.css'
const AjoutAdmin= () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
 
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [telError, setTelError] = useState(false);
  const [err , setErr] = useState("");
  const [success , setSuccess] = useState("");
  const [genre, setGenre] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState("");



const AjouterAdmin= async (e) => {
  e.preventDefault();
  await axios.post('http://localhost:5000/users/registeradmin', {
  name: name,
  genre:genre,
  email:email,
  password:password,
  tel: tel,
  
  
  
},{
     headers: {'X-Requested-With': 'XMLHttpRequest', 
     "content-type":"application/json", "Access-Control-Allow-Origin": "http://localhost:5000", 
     "Access-control-request-methods":"POST, GET, DELETE, PUT, PATCH, COPY, HEAD, OPTIONS"}, 
    "withCredentials": true 
  }
  
  ).then(res=>{
    if (res.status===200){
      console.log("success");
      setSuccess('admin ajoutée');
      
    }
  },).catch(err=>{
  console.log("admin deja existe");
      setErr('admin deja existe');
});

}
  const isFormValid = () => {
    // add validation rules here
    return name !== '' && email !== '' && tel !== '' && password !== ''  && !nameError && !emailError && !telError && !passwordError ;
  };
  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
    setNameError(value.length < 3);
  };
  const handlegenreChange = (event) => {
    const { value } = event.target;
    setGenre(value);
  };
  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setPasswordError(value.length < 8);
  };
 

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(value === '' || !/\S+@\S+\.\S+/.test(value));
  };

  const handleTelChange = (event) => {
    const { value } = event.target;
    setTel(value);
    setTelError(!/^\d{8}$/.test(value));
  };
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
              alignItems: 'center',
              border:1,
              padding:3,paddingTop:4,
            }}
          >
           
            <Typography component="h1" variant="h6">
               Ajouter un noveau administrateur
            </Typography>
            <Box component="form"  onSubmit={AjouterAdmin} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                <label className="label">Nom Complet</label>
                  <TextField
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth placeholder="saisir votre nom"
                    id="Name"
                     value={name}
                    autoFocus
                    onChange={handleNameChange}
                     error={nameError}
                     helperText={nameError && 'Name is required and at least 3 character'}
                   
                  />
                </Grid>
                <Grid item xs={12} >
                <label className="label">Genre</label>
                  <Select placeholder="homme"
                     value={genre}
                     onChange={handlegenreChange}
                       required 
                       fullWidth >
                        <MenuItem  Selected  value="homme">Homme</MenuItem>
                         <MenuItem value="femme">Femme</MenuItem>
                                    
                  </Select>
                
               
   
                  
                 </Grid>
               
                <Grid item xs={12} >
                <label className="label">Adress E-mail</label>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    value={email}
                    name="email"  placeholder="nom@email.com"
                    autoComplete="family-name"
                    onChange={handleEmailChange}
                    error={emailError}
                    helperText={emailError ? 'Please enter a valid email address' : ''}
                    
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
                onChange={handlePasswordChange}
                error={passwordError}
                helperText={passwordError ? 'Password must be at least 6 characters' : ''}

                 />
               </Grid>
                <Grid item xs={12}>
                <label className="label">Numéro Téléphone</label>
                  <TextField
                    required
                    fullWidth
                    id="tel" value={tel}
                    placeholder="Saisir votre numéro de téléphone"
                    name="tel"
                    autoComplete="tel"
                    onChange={handleTelChange}
                    error={telError}
                    helperText={telError ? 'Please enter a valid telephone number' : ''}
                    
                    
                  />
                </Grid>
              
               
              </Grid>
              <Grid item xs={12}>
              <button
                type="submit"
                
                variant="contained"  className="annuler"
                sx={{ mt: 3, mb: 2 }} 
              >
                annuler
              </button>
              <button
                type="submit"
                
                variant="contained"  className="inscrivez"
                sx={{ mt: 3, mb: 2 }} disabled={!isFormValid()}
              >
                confirmer
              </button></Grid>
             
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
  }
   /* <div>
      <h1 className="title">Devenir instructeur </h1>
   
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveFormateur} className="box" >
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nom Complet</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Saisir votre non et votre prénom "
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Adress E-mail</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                    placeholder="nom@email.com"
                  />
                </div>
              </div>
              <div className="field"></div>
                <label className="label">Numéro Téléphone</label>
                  <div className="control">
                   <input
                    type="text"
                    className="input"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    placeholder="Saisir votre numéro de téléphone"
                  />
              </div>
             
                <div className="field">
                <label className="label">Votre cv </label>
                <div className="control">
                  <input
                     type="file"
                      name="cv"
                      onChange={handleFileChange} accept=".pdf" 
                     
                  />
                </div>

              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                   type="text"
                   value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Saisir votre message"
                  />
                </div>
              </div>
 
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Envoyer 
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>*/
 

export default AjoutAdmin;