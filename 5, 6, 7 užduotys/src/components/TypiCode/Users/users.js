import React from "react";
import Usercard from "./usercard";

export default function Users(props) {
    let { data: users } = props;
    let list = users.map(user => {
        return <Usercard key={user.id} id={user.id} title={user.name} body={user.username} email={user.email} address={user.address} />
    })

    return (
        <div>
            {list}
        </div>
    )

}
