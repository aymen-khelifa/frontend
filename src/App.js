import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registrer from "./components/Register";
import Login from "./components/Login";
import Header from "./header/Header";
import EditUser from "./pages/EditUser";
import AddFormateur from "./pages/AddFormateur";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<nav><Header /><Login /></nav>  } />
          <Route path="/Registrer" element={<nav><Header /><Registrer /></nav> } />
          <Route path="/mdpoublie" element={<nav><Header /><EditUser/></nav> } />
          <Route path="/addFormateur" element={<AddFormateur/> } />

         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;