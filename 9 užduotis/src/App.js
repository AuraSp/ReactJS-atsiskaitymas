import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

import Cake from './components/Cake/Cake';
import Fetch from './components/FetchAPI/fetch';
import UseEffectFetchData from './components/FetchAPI(Async)/Fetch(Async)';
import FetchProfile from './components/FetchAPI(Async)/Fetch(Async)profile';
import Share from './components/Share/share';

function App() {

  return (
    <div className='container-fluid'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Cake' element={<Cake />} />
          <Route path='TypiCode' element={<Fetch />} />
          <Route path='/GithubUsers' element={<UseEffectFetchData />} />
          <Route path='/GithubUsers/:username' element={<FetchProfile />} />
          <Route path='Share' element={<Share />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
