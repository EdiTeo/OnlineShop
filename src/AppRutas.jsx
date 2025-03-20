 
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from './componentes/home';
import {Footer} from './componentes/Footer';
import {MenuBar} from './componentes/MenuBar';
import { Login } from './componentes/Login';
export default function AppRutas(){
  return(
    <BrowserRouter>
        <MenuBar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <Login/> } />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}
 
