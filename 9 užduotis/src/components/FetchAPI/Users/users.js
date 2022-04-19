import React from "react";
import Usercard from "./usercard";

export default function Users(props) {

    let { data: users } = props;
    let list = users.map(user => {
        return <Usercard
            key={user.id}
            data={user}
        />
    })
    return (
        <div className="d-flex  justify-content-center flex-row flex-wrap">
            {list}
        </div>
    )

}
