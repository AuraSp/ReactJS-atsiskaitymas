import React from 'react'

export default function Albumcard({data}) {
  return (
    <div className='w-25 border border-warning border-1 p-3 m-1'>
        <div>Album Id: {data.id}</div>
        <div>User Id: {data.userId}</div>
            <p>{data.title}</p>
    </div>
  )
}
