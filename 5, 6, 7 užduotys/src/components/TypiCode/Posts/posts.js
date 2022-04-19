import React from "react";
import Postcard from "./postcard";

export default function Posts(props) {
    let { data: posts } = props;
    let list = posts.map(post => {
        return <Postcard key={post.userId} id={post.id} title={post.title} body={post.body} />
    })
    return (
        <div className="d-flex flex-row flex-wrap justify-content-center text-light w-75 m-auto p-3 bg-light">
            {list}
        </div>
    )

}