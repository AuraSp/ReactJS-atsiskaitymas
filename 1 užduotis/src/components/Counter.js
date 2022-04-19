import React from 'react';
import { useState } from 'react';

export default function Counter() {

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    function countLike() {
        setLike(like + 1);
    }
    function countDislike() {
        setDislike(dislike + 1);
    }
    function reset() {
        setLike(0);
        setDislike(0);
    }

    return (
        <div className='d-flex flex-row justify-content-center bg-light pb-5'>
            <button onClick={reset} className='border border-0 p-3 fs-3 mx-2 bg-primary'>Reset</button>
            <button onClick={countLike} className='border border-0 p-3 fs-3 mx-2 bg-primary'>Like {like}</button>
            <button onClick={countDislike} className='border border-0 p-3 fs-3 mx-2 bg-primary'>Dislike {dislike}</button>
        </div>
    )
}

