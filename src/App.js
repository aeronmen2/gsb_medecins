import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from 'axios';
import Medecins from "./components/Medecins";
import MedecinInfo from "./components/MedecinInfo";
import Navbar from "./components/Navbar";
import Departements from "./components/Departements";
import Pays from "./components/Pays";
import './App.css';

function App(){

  return (
    <div className="App">   
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/medecins" element={<Medecins/>} /> 
          <Route exact path="/medecininfo/:idMedecin" element={<MedecinInfo/>} /> 
          <Route exact path="/departements" element={<Departements/>} />
          <Route exact path="/pays" element={<Pays/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;