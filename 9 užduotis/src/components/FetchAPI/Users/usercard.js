import React from 'react'

export default function Usercard({data}) {
  return (
    <div className='w-55 border border-warning border-1 p-3 m-1'>
        <div className='text-dark'>User Id: {data.id}</div>
        <div className='border-top border-2'>
            <p>{data.name}</p>
            <p>{data.username}</p>
            <p>{data.email}</p>
        </div>
        <div className='border-top border-2'>
        <p>{data.address.street}</p>
        <p>{data.address.suite}</p>
        <p>{data.address.city}</p>
        <p>{data.address.zipcode}</p>
        </div>
        <div className='border-top border-2'>
          <p>Geo{data.address.geo.lat}</p>
        </div>
    </div>
  )
}
