import React from "react";
import Commentcard from "./commentcard";

export default function Comments(props) {
    let { data: comments } = props;
    let list = comments.map(comment => {
        return <Commentcard key={comment.postId} id={comment.id} name={comment.name} email={comment.email} body={comment.body} />
    })
    return (
        <div>
            {list}
        </div>
    )
}
