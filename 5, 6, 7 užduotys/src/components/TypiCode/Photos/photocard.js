import React from 'react'

export default function Photocard(props) {
    let {id, title, url, thumbnailUrl} = props
  return (
    <div>
        <div className='text-dark'>Photo Id: {id}</div>
            <p>{title}</p>
            <img src={url} alt={id}></img>
            <img src={thumbnailUrl} alt={id}></img>
    </div>
  )
}
