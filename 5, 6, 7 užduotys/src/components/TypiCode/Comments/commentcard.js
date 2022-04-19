import React from 'react';

export default function Commentcard(props) {
    let {id, name, email, body} = props
  return (
    <div>
        <div className='text-dark'>Post Id: {id}</div>
        <div>
            <h4>{name}</h4>
            <p>{email}</p>
        </div>
        <p>{body}</p>
    </div>
  )
}
