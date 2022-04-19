import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


export default function FetchCard({ users }) {

    return (
        <>
            <Header />
            <div className='text-center mt-3'>
                <Link to='/'>
                    <button className='btn btn-warning'>Go back</button>
                </Link>
            </div>
            <div className='row'>
                {
                    users.map((user) => (
                        <div key={user.node_id} className='w-25 p-3 text-center'>
                            <img src={user.avatar_url}
                                className="bd-placeholder-img rounded-circle" width="140"
                                height="140"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                                alt={user.id}>
                            </img>
                            <h4 className='text-dark'>Login name: <span className='fs-5 text-muted border-bottom border-warning pb-1'>{user.login}</span>
                            </h4>
                            <p className='text-danger' >User type: {user.type}</p>

                            <Link to={`/GithubUsers/${user.login}`}>
                                <button className="btn btn-secondary">View details &raquo;</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </>
    )
}
