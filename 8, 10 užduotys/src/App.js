import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import UseEffectFetchData from './components/Fetch(Async)';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './components/Fetch(Async)profile';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<UseEffectFetchData />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}


export default App;
