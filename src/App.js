import './App.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import ResponsiveAppBar from './components/ResponsiveAppBar.js';

// views
import Homepage from './views/homepage/homepage';
import IlGiardino from './views/il_giardino/ilGiardino';
import IlPercorsoVirgiliano from './views/il_percorso_virgiliano/ilPercorsoVirgiliano';
import LeSchedeBotaniche from './views/le_schede_botaniche/leSchedeBotaniche';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={ <Homepage /> } />
          <Route path='il-giardino' element= { <IlGiardino /> } />
          <Route path='il-percorso-virgiliano' element= { <IlPercorsoVirgiliano /> } />
          <Route path='le-schede-botaniche' element={ <LeSchedeBotaniche /> } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
