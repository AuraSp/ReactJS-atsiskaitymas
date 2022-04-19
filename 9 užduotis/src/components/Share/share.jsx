import React from 'react';
import { Link } from 'react-router-dom';

export default function Share() {
  const url = window.location.href

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    alert('URL: ' + url);
  }
  return (
    <div>
      <button onClick={copy}>Copy URL to the clipboard</button>
      <input value={url} readOnly></input>
      <div className='text-center'>
        <Link to='/'>
          <button className='btn btn-warning'>Go back</button>
        </Link>
      </div>
    </div >
  );
}

