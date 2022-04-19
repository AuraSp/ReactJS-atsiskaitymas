import React from 'react';
import './PostImage.css';
import { useState } from 'react';

export default function PostImage(img) {
    const [color, setColor] = useState(false);

    function bgColor() {
        setColor(!color);
    }

    return (
        <div className={`col-12 d-flex flex-row justify-content-center ${color ? 'bg-secondary' : 'bg-light'}`}>
            <div className='card bg-transparent border-0 text-dark fs-3 text-center'>
                <img src={require(`./img/${img.image}`)} className='card-img-top w-100' alt='...'></img>
                <div className='card-body'>
                    <h3 className={color ? 'text-light' : ''}>`npm` Documentation</h3>
                    <p className={color ? 'text-light' : ''}>React is flexible and can be used in a variety of projects. You can create new apps with it, but you can also gradually introduce it into an existing codebase without doing a rewrite.</p>
                    <a href='https://reactjs-bot.github.io/react/docs/installation.html' className={`border border-3 border-dark rounded p-2 text-decoration-none ${color ? 'text-light' : ''}`}>Install me</a>
                </div>
            </div>

            <div className='card bg-transparent border-0 text-dark fs-3 text-center'>
                <img src={require(`./img/${img.image}`)} className='card-img-top w-100' alt='..'></img>
                <div className='card-body'>
                    <h3 className={color ? 'text-light' : ''}>ReactJS Documentation</h3>
                    <p className={color ? 'text-light' : ''}>React is a JavaScript library, and so it assumes you have a basic understanding of the JavaScript language.</p>
                    <a href='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FNode_logo_NodeJS.png&f=1&nofb=1' className={`last border border-3 border-dark rounded p-2 text-decoration-none ${color ? 'text-light' : ''}`}>Try me</a>
                </div>
            </div>
            <div className='btn fs-3'>
                <button onClick={bgColor} className='border border-0 p-3'>Color change</button>
            </div>
        </div>
    );
}