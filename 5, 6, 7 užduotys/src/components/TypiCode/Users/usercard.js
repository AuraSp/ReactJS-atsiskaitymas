import React from 'react'

export default function Usercard(props) {
    let {id, name, username, email, address} = props
  return (
    <div>
        <div className='text-dark'>User Id: {id}</div>
        <div>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
        </div>
        <div>
        <p>{address.street}</p>
        <p>{address.suite}</p>
        <p>{address.city}</p>
        <p>{address.zipcode}</p>
        </div>
        <div>
          <p>Geo{address.geo.lat}</p>
        </div>
    </div>
  )
}
