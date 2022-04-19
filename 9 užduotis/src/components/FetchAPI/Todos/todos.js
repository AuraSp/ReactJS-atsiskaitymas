import React from 'react'
import Todocard from './todocard';

export default function Todos(props) {
    let { data: todos } = props;
    let list = todos.map(todo => {
        return <Todocard
            key={todo.userId}
            data={todo} />
    })
    return (
        <div className="d-flex justify-content-center flex-row flex-wrap">
            {list}
        </div>
    )

}
