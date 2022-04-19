import React from 'react';
import { useEffect, useState } from 'react';
import './fetch.css';
import Posts from './Posts/posts';
import Users from './Users/users';
import Comments from './Comments/comments';
import Albums from './Albums/albums';
import Photos from './Photos/photos';
import Todos from './Todos/todos';

export default function Fetch() {

    // //========SIMPLE FETCH=========//

    const [type, setType] = useState();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(arr => {
                console.log(type, { type })
                console.log(arr)
                setData(arr)

            })
            .catch(error => {
                return setError(error);
            })
            .finally(() => {
                setLoading(false);
            })

        if (loading) return 'Loading..'; //If needed to wait until data response
        if (error) return 'Error!..'; //If having an error while fetching API

    }, [type])

    return (
        <div className='d-flex flex-column justify-content-center align-items-center m-0 h-auto'>
            <div className='buttons'>
                <button onClick={() => setType('posts')} className='border-0 rounded p-2 m-1'>Get post</button>
                <button onClick={() => setType('comments')} className='border-0 rounded p-2 m-1'>Get comments</button>
                <button onClick={() => setType('albums')} className='border-0 rounded p-2 m-1'>Get albums</button>
                <button onClick={() => setType('photos')} className='border-0 rounded p-2 m-1'>Get photos</button>
                <button onClick={() => setType('todos')} className='border-0 rounded p-2 m-1'>Get todos</button>
                <button onClick={() => setType('users')} className='border-0 rounded p-2 m-1'>Get users</button>
            </div>
            {<p className='border rounded border-5 mt-2 w-25 text-center'>GET TYPE: <span style={{ color: type ? '#ffc107' : '' }}>{`${type ? `${type}` : 'click to get API data type'}`}</span></p>}


            {type === "posts" ? <Posts data={data} /> : type === "comments" ? <Comments data={data} /> : type === 'users' ? <Users data={data} /> : type === 'albums' ? <Albums data={data} /> : type === 'photos' ? <Photos data={data} /> : <Todos data={data} />}

        </div>
    )


    //========MEDIUM FETCH=========//


    // const [type, setType] = useState();

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             let response = await fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //             console.log(response.status); // 200
    //             console.log(response.statusText); // OK
    //             if (response.status === 200) {
    //                 let data = await response.json();
    //                 console.log({ type })
    //                 console.log(data)
    //             };
    //         } catch (error) {
    //             return error;
    //         };
    //     })();
    // }, [type])

    // return (
    //     <div>
    //         <div className='buttons d-flex justify-content-center'>
    //             <button onClick={() => setType('posts')} className='border-0 rounded p-2 m-1'>Get post</button>
    //             <button onClick={() => setType('comments')} className='border-0 rounded p-2 m-1'>Get comments</button>
    //             <button onClick={() => setType('albums')} className='border-0 rounded p-2 m-1'>Get albums</button>
    //             <button onClick={() => setType('photos')} className='border-0 rounded p-2 m-1'>Get photos</button>
    //             <button onClick={() => setType('todos')} className='border-0 rounded p-2 m-1'>Get todos</button>
    //             <button onClick={() => setType('users')} className='border-0 rounded p-2 m-1'>Get users</button>
    //         </div>
    //         <div className='d-flex justify-content-center align-items-center my-2'>
    //             <p className='border rounded border-5 mt-2 w-25 text-center'>
    //                 GET TYPE:
    //                 <span style={{ color: type ? '#ffc107' : '' }}> {`${type ? `${type}` : 'click to get API data type'}`}</span>
    //             </p>
    //         </div>
    //     </div>
    // )

}