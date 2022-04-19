import React from 'react';
import {
    Link
} from "react-router-dom";

function Home() {
    return (
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
                <Link to="/" className='navItem fw-bold mx-1 p-2'>Home</Link>
                <Link to="/Cake" className='navItem fw-bold mx-1 p-2'>Cake</Link>
                <Link to="/TypiCode" className='navItem fw-bold mx-1 p-2'>TypiCode</Link>
                <Link to="/GithubUsers" className='navItem fw-bold mx-1 p-2'>Github-Users</Link>
                <Link to="/Share" className='navItem fw-bold mx-1 p-2'>Share</Link>
            </div>
        </div>
    )
}

export default Home