import React from "react";
import { FiCheck } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import "./TodoList.css";

export default function TodoListCard({ id, task, status, changeStatus, onDelete }) {
    return (
        <div className="d-flex flex-row my-3">
            <p className={status ? "text-decoration-line-through text-warning m-0" : 'text-light m-0'}>
                {status ? <FiCheck /> : <FiChevronRight />}
                {task}
            </p>
            <button onClick={() => changeStatus(id)} style={{backgroundColor: status ? 'yellow' : '', color: status ? '#000' : ''}} className="btn btn-light btn-sm mx-1">
                {status ? "Done" : "Check"}
            </button>
            <button onClick={() => onDelete(id)} className="btn btn-danger btn-sm mx-1">Delete</button>
        </div>
    );
}
