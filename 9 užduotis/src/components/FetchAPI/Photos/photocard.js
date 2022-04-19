import React from 'react'

export default function Photocard({ data }) {
  return (
    <div className='w-55 p-3 m-1'>
      <div className='text-dark'>Photo Id: {data.id}</div>
      <p>{data.albumId}</p>
      <p>{data.title}</p>
      <img src={data.thumbnailUrl} alt={data.id} className='img-fluid w-55 h-25'></img>
    </div>
  )
}
