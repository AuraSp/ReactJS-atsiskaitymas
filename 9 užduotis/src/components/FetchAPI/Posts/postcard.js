import React from 'react';
import './postcard.css'

export default function Postcard(props) {
  let { id, title, body } = props
  return (
    <div className='d-flex flex-row border border-3 rounded m-4'>
      <div className='firstChild'>
        <span className='text-muted circle pb-5'>User Id: {id}</span>
      </div>
      <div className='secondChild text-dark'>
      <p className='fw-bolder text-center'>{title}</p>
        <p className='fst-italic text-end p-2 m-0'>{body}</p>
        <span className='text-muted py-2'>Posts</span>
      </div>
    </div>
  )
}
