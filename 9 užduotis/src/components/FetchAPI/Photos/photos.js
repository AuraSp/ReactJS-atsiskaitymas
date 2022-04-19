import React from 'react';
import Photocard from './photocard';

export default function photos(props) {
    let { data: photos } = props;
    let list = photos.map(photo => {
        return <Photocard 
        key={photo.id} 
        data={photo} />
    })
    return (
        <div className="d-flex flex-row flex-wrap">
            {list}
        </div>
    )

}
