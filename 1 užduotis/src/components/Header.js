import React from 'react';
import "./Header.css";

export default function Header(props) {

    return (
        <div className='bg_img'>
            <h1 className='d-flex justify-content-center align-items-baseline'>{props.title}</h1>
        </div>
    );
}
