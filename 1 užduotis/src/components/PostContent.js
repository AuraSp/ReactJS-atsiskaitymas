import React from 'react';
import './PostContent.css';

export default function PostContent(props) {
    return (
        <div className='bg-light col-4 pb-3'>
            <div className='m-3 fs-4'>
                <h2 className='mb-5'>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    );
}