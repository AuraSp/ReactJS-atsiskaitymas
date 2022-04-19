import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function FetchProfile() {
    const [users, setProfile] = useState([]);
    let { username } = useParams();

    const url = `https://api.github.com/users/${username}`;

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setProfile(users);
        console.log(users)
    };
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <h4 className="text-dark text-center">Profile: {users.login}</h4>
                <h4 className="text-dark text-center">Followers: <h5 className="text-muted">{users.followers}</h5></h4>
                <img src={users.avatar_url} className='w-25' alt={users.login}></img>
            </div>
            <div className='text-center mt-4'>
                <Link to='/'>
                    <button className='btn btn-warning'>Go back</button>
                </Link>
            </div>
        </div>
    );
}
