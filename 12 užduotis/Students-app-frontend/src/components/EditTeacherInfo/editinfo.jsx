
import React from 'react';
import { useState } from 'react';
import { MdCancel, MdOutlineCheckBox } from "react-icons/md";

import './editinfo.css'

function Editinfo({ data, onCancel, onSubmit }) {
    const [name, setName] = useState(data.name)
    const [surname, setSurname] = useState(data.surname);
    const [birthdate, setBirthdate] = useState(data.birthdate);
    const [town, setTown] = useState(data.town);
    const [subject, setSubject] = useState(data.subject);
    const [subjectGroup, setSubjectGroup] = useState(data.subjectGroup);


    const editTeacher = (e) => {
        e.preventDefault();
        onSubmit(e, name, surname, birthdate, town, subject, subjectGroup)
    }


    return (
        <tr className='edit'>
            <td>
                <span><input
                    type='text'
                    defaultValue={data.name}
                    onChange={(e) => setName(e.target.value)}>
                </input></span>
            </td>
            <td>
                <span><input
                    type='text'
                    defaultValue={data.surname}
                    onChange={(e) => setSurname(e.target.value)}>
                </input></span>
            </td>
            <td>
                <span><input
                    type='text'
                    defaultValue={data.birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}>
                </input></span>
            </td>
            <td>
                <span> <input
                    type='text'
                    defaultValue={data.town}
                    onChange={(e) => setTown(e.target.value)}>
                </input></span>
            </td>
            <td>
                <span>
                    <select
                        className='bg-transparent'
                        defaultValue={data.program}
                        onChange={(e) => setSubject(e.target.value)}>
                        <option value='' disabled>---Choose your program--</option>
                        <option value='Javascript'>JavaScript</option>
                        <option value='Java'>Java</option>
                        <option value='PHP'>PHP</option>
                        <option value='Tester'>Programinės įrangos testuotojas</option>
                    </select>
                </span>
            </td>
            <td>
                <span>
                    <select
                        className='bg-transparent'
                        defaultValue={data.group}
                        onChange={(e) => setSubjectGroup(e.target.value)}>
                        <option value='' disabled>---Choose your group--</option>
                        <option value='1'>1 grupė</option>
                        <option value='2'>2 grupė</option>
                        <option value='3'>3 grupė</option>
                    </select>
                </span>
            </td>
            <td className='buttons'>
                <button onClick={(e) => editTeacher(e)} className='btn btn-danger border-0 text-warning mt-2'><MdOutlineCheckBox />
                    <p className='d'>Edit</p></button>
                <button onClick={() => onCancel()} className='btn btn-secondary border-0 text-warning mt-2'><MdCancel /><p className='e'>Cancel</p></button>
            </td>
        </tr >
    )
}

export default Editinfo