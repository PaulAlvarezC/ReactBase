import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-primary">
            Inicio
          </Link>
          <Link to="/about" className="btn btn-primary">
            Nosotros
          </Link>
          <Link to="/services" className="btn btn-primary">
            Servicios
          </Link>
          <Link to="/contacts" className="btn btn-primary">
            Contactos
          </Link>
        </div>
        <hr />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about"  element={<About/>}/>
          <Route path="/services"  element={<Services/>}/>
          <Route path="/contacts"  element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
