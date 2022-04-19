import React from 'react'

export default function Todocard({ data }) {
  return (
    <div className='w-25 border border-warning border-1 p-3 m-1'>
      <div className='text-dark'>User Id: {data.userId}</div>
      <p>{data.title}</p>
      <p className={data.completed === true ? 'text-success' : 'text-danger'}>{JSON.stringify(data.completed)}</p>
    </div>
  )
}
