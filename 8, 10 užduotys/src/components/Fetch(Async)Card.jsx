import React from 'react';
import { Link } from "react-router-dom";

export default function FetchCard({ data }) {
    return (
        <>
            <div key={data.node_id} className='w-25 p-3 text-center'>
                <img
                    src={data.avatar_url} className="bd-placeholder-img rounded-circle" width="140"
                    height="140"
                    preserveAspectRatio="xMidYMid slice" focusable="false"
                    alt={data.id}>
                </img>
                <h4 className='text-dark'>Login name: <span className='fs-5 text-muted border-bottom border-warning pb-1'>{data.login}</span></h4>
                <p className='text-danger' >data type: {data.type}`</p>
                <p>
                    <Link to={`/profile/${data.login}`}>
                        <button className="btn btn-secondary">View details &raquo;</button>
                    </Link>
                </p>
            </div>
        </>
    )
}
