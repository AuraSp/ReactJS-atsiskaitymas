import React from 'react';
import { useState } from 'react';
import { FaCheck, FaChevronRight } from 'react-icons/fa';


export default function Cake() {
    const [task, setTask] = useState({
        taskTitle: 'Make a Cake',
        status: false,
        text: false,
    });

    function changeStatus() {
        setTask((previousState) => {
            return {
                ...previousState,
                taskTitle: 'Cake is made',
                status: true,
                text: true,
            };
        });
    }

    return (
        <div style={{ background: '#222', width: '80%' }} className='m-auto p-5 d-flex flex-column text-light'>
            <div className='border border-3 p-4'>
                <h4 className='text-light border-bottom border-danger pb-1 w-25 text-center'>Without using .json</h4>
                <h4 className={`text-success ${task.text ? 'text-decoration-line-through text-warning' : ''}`}><span className='mx-1'>{task.status ? <FaCheck /> : <FaChevronRight />}</span>{task.taskTitle}</h4>
                <div>
                    <button onClick={changeStatus} type='button' style={{backgroundColor: task.status ? 'yellow' : ''}} className='btn btn-light mx-2'>
                        {task.status ? 'Done' : 'Change Status'}
                    </button>
                </div>
            </div>
        </div>
    )
}
