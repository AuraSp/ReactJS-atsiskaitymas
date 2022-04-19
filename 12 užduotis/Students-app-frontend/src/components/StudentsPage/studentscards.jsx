import React from 'react';
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import './card.css'

function Studentscards({ id, data, onDelete, onEdit }) {

    return (
        <tr className='cards text-center'>
            <td><span>{data.name}</span></td>
            <td><span>{data.surname}</span></td>
            <td className='birthtd'><span className='birthspan'>{data.birthdate}</span></td>
            <td><span>{data.town}</span></td>
            <td><span>{data.program}</span></td>
            <td><span>{data.group}</span></td>
            <td className='buttons'>
                <button onClick={(e) => onDelete(e, id)} className='btn btn-danger border-0 text-warning mt-2'><MdDelete />
                    <p className='d'>Remove</p></button>
                <button onClick={(e) => onEdit(e, data)} className='btn btn-secondary border-0 text-warning mt-2'><AiFillEdit /><p className='e'>Edit</p></button>
            </td>
        </tr >

    )
}

export default Studentscards