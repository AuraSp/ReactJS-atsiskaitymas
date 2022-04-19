import React from 'react'

export default function Albumcard(props) {
    let {id,title} = props
  return (
    <div>
        <div className='text-dark'>Album Id: {id}</div>
            <p>{title}</p>
    </div>
  )
}
