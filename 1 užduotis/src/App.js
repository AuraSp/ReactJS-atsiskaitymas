import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header';
import PostImage from './components/PostImage';
import Box from './components/Box';
import PostData from './components/postContentdata';

function App() {

  return (
    <div className='container-fluid'>
      <div className='row col'>
        <Header
          title='ReactJS Learning'
        />
      </div>
      <div className='row'>
        <PostImage
          image='me.jpg'
        />
      </div>
      <div className='row'>
        <PostData />
      </div>
      <div className='row'>
        <Box />
      </div>
    </div>
  );
}


export default App;
