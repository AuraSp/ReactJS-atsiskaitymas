import React from "react";
import data from "./todolist.json";
import TodoListCard from "./TodoListCard";
import { useState } from "react";

export default function TodoList() {
  const [status, setStatus] = useState(data);

  function changeStatus(id) {
    const updateStatus = [...status];
    updateStatus.forEach((data) => {
      if (data.id === id) {
        data.status = true;
      }
    });
    setStatus(updateStatus);
  }

  function handleDelete(id) {
    const counters = status.filter((c) => c.id !== id);
    setStatus(counters);
  }

  const taskData = status.map((data) => {
    return (
      <TodoListCard
        key={data.id}
        id={data.id}
        task={data.task}
        status={data.status}

        changeStatus={changeStatus}
        onDelete={handleDelete}
      />
    );
  });

  return <div style={{ background: '#222', width: '80%' }} className='m-auto p-5'>
    <div className="border border-3 p-4">
      <h4 className="text-light border-bottom border-danger pb-1 w-25 text-center">Using .json</h4>
        {taskData.length ? taskData : <span className="text-light"><em>No more tasks to do</em></span>}
    </div>
  </div>
}
