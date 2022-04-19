import React from 'react';
import Photocard from './photocard';

export default function photos(props) {
    let { data: photos } = props;
    let list = photos.map(photo => {
        return <Photocard key={photo.albumId} id={photo.id} title={photo.title} url={photo.url} thumbnail={photo.thumbnailUrl}/>
    })
    return (
        <div>{list}</div>
    )

}
