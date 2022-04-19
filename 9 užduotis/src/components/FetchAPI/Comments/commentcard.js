import React from 'react';

export default function Commentcard({ data }) {
  return (
    <div className='w-25 border border-warning border-2 p-3 m-5'>
      <div>Post Id: {data.postId}</div>
      <h5>{data.name}</h5>
      <p>{data.email}</p>
      <p>{data.body}</p>
    </div>
  )
}
