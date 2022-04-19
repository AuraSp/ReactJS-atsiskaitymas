import React from "react";
import Commentcard from "./commentcard";

export default function Comments(props) {
    let { data: comments } = props;
    let list = comments.map(comment => {
        return <Commentcard 
        key={comment.id} 
        data={comment} />
    })
    return (
        <div className="d-flex flex-row flex-wrap">
            {list}
        </div>
    )
}
