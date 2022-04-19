import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';

import ContentFirst from './Pages/Praktika-1, 2, 3/content';
import ContentSecond from './Pages/Praktika-4, 5, 6/content';
import UseEffectFetchData from './Pages/Praktika-4, 5, 6/FetchAPI(Async)/Fetch(Async)';
import FetchProfile from './Pages/Praktika-4, 5, 6/FetchAPI(Async)/Fetch(Async)profile';
import StudentMain from './Pages/Praktika 8/studentMain';
import { Fragment } from 'react/cjs/react.production.min';
function App() {

  return (
    <Fragment>
    <Router>
      <nav className='container-fluid'>
        <Link to='/'> Home </Link>
        <Link to='/praktika 1,2,3'> Praktika-1,2,3 </Link>
        <Link to='/praktika 4,5,6'> Praktika-4,5,6 </Link>
        <Link to='/profilelist'> Profile </Link>
        <Link to='/praktika-8'> Student registration </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='praktika-1,2,3' element={<ContentFirst />} />
        <Route path='praktika-4,5,6' element={<ContentSecond />} />
        <Route path='/profilelist' element={<UseEffectFetchData />} />
        <Route path='/profile/:username' element={<FetchProfile />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
    </Fragment>
  );
}

export default App;

