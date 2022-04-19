import React from "react";
import Albumcard from "./albumcard";

export default function Albums(props) {
    let { data: albums } = props;
    let list = albums.map(album => {
        return <Albumcard key={album.userId} id={album.id} title={album.title}/>
    })
    return (
        <div>{list}</div>
    )

}
