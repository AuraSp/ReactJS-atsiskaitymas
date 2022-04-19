import React from "react";
import Albumcard from "./albumcard";

export default function Albums(props) {
    let { data: albums } = props;
    let list = albums.map(album => {
        return <Albumcard
            key={album.id}
            data={album} />
    })
    return (
        <div className="d-flex  justify-content-center flex-row flex-wrap">
            {list}
        </div>
    )

}
