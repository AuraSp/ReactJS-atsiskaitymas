import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import TodoList from './components/TodoList/TodoList';
import Fetch from './components/GitUsers/fetch';
import ProgrammingList from './components/Learning/programmingList';

function App() {

  return (
    <div className='container-fluid'>
       <div className='row'>
        <ProgrammingList />
      </div>
      <div className='row'>
        <TodoList />
      </div>
      <div className='row'>
        <Fetch />
      </div>
    </div>
  );
}


export default App;
