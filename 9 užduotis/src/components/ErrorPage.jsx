import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

export default function ErrorPage() {
  return (
    <div className='row error d-flex text-dark mt-5'>
      <p className='d-block text-center mt-5 fs-1
      '>404</p>
      <p className=' errorp d-block text-center'>Travolta not found anything</p>
      <div className='text-center'>
        <Link to='/'>
          <button className='btn btn-warning'>Go back</button>
        </Link>
      </div>
      <div className='image d-flex justify-content-center'>
        <img src='https://i.imgflip.com/6948so.gif' alt='j'></img>
      </div>
    </div>
  )
}
