import React from 'react'
import Todocard from './todocard';

export default function Todos(props) {
    let { data: todos } = props;
    let list = todos.map(todo => {
        return <Todocard key={todo.userId} id={todo.id} title={todo.title} completed={todo.false}/>
    })
    return (
        <div>{list}</div>
    )

}
