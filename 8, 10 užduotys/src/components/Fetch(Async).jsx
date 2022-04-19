import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FetchCard from './Fetch(Async)Card';
const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users)
    };
    useEffect(() => {
        getUsers();
    }, []);

    const usersData = users.map((data) => {
        return (
            <FetchCard
                key={data.id}
                data={data}
            />
        );
    });
    return <div className='d-flex flex-row flex-wrap'>
        {usersData}
    </div>
};

export default UseEffectFetchData;