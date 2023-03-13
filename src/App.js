import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registrer from "./components/register/Register";
import Login from "./components/login/Login";
import Header from "./header/Header";
import AddFormateur from "./pages/AddFormateur";
//import SidebarA from "./sidebar/sidebarAdmin/SidebarAdmin";
import AjoutAdmin from "./components/ajouteradmin/AjouterAdmin"
import Home from "./pages/Home";
import Dashboard from "./pages/Dashbord";
import FormEmailmdp from "./components/mdpoublie/Formemail";
import Formmdpoublie from "./components/mdpoublie/Formmdpoublie";
import Changemdp from "./components/changemdp/Changemdp"
import Activationpage from "./Activationpage";
import Welcome from "./components/welcome";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<nav><Header /><Login /></nav>  } />
          <Route path="/Registrer" element={<nav><Header /><Registrer /></nav> } />
          <Route path="/Formemail" element={<nav><Header /><FormEmailmdp/></nav> } />
          <Route path="/Formmdpoublie" element={<nav><Header /><Formmdpoublie/></nav> } />
          <Route path="/Home" element={<nav><Home/></nav> } />

          <Route path="/devenirinstructeur" element={<AddFormateur/> } />
          <Route path="/AjouterAdmin" element={<nav><Header /><AjoutAdmin /></nav> } />
          <Route path="/Changemdp" element={<nav><Header /><Changemdp /></nav> } />
          <Route path="/ajouterformateur" element={<nav><AddFormateur /></nav> } />
          <Route path="/activationpage/:activationCode" element={<nav><Activationpage /></nav> } />
        
          <Route path="/welcome" element={<nav><Welcome/></nav> } />

          
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;