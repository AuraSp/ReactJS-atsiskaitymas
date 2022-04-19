import React from 'react'

export default function Todocard(props) {
    let {id,title, completed} = props
  return (
    <div>
        <div className='text-dark'>User Id: {id}</div>
            <p>{title}</p>
            <p>{completed}</p>
    </div>
  )
}
