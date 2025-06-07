 
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from './componentes/home';
import {Footer} from './componentes/Footer';
import {Header} from './componentes/Header';
import { Login } from './componentes/Login';
import { Viaje } from './componentes/Viaje';
import { Mochila } from './componentes/Mochila';
import { Ropa} from './componentes/Ropa';
import { Hombre } from './componentes/Hombre';
import { Mujer } from './componentes/Mujer';
import { Bolsos } from './componentes/Bolsos';
export default function AppRutas(){
  return(
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/viaje" element={ <Viaje/> } />
            <Route path="/mochilas" element={ <Mochila/> } />
            <Route path="/ropa" element={ <Ropa/> } />
            <Route path="/hombre" element={ <Hombre/> } />
            <Route path="/mujer" element={ <Mujer/> } />
            <Route path="/bolso" element={ <Bolsos/> } />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}
 
