import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { BiSearchAlt } from "react-icons/bi";
import {
    Link,
    useSearchParams
} from "react-router-dom";
import Teacherscards from './teacherscards';
import './teachersmain.css'
import Editinfo from '../EditTeacherInfo/editinfo';


const url = 'http://localhost:5500/api/v1/teachers/';

function TeachersMain() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams('');
    let [editId, setEditId] = useState('');
    const [sortValue, setSortValue] = useState('ASC');

    const getUsers = async () => {
        setLoading(true);
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
        setUsers(users.data.teachers);
        setLoading(false);
    }

    useEffect(() => {
        getUsers();
    }, []);

    //---SearchTeacher---//
    const searchTerm = searchParams.get('name', 'surname', 'town', 'program', 'group') || '';
    function handleSearch(e) {
        const name = e.target.value;
        const surname = e.target.value;
        const town = e.target.value;
        const program = e.target.value;
        const group = e.target.value;


        if (name) {
            setSearchParams({ name })
            setUsers(users.filter(data => data.name.toLowerCase().includes(searchTerm.toLowerCase())))
        } else {
            setSearchParams('')
            setUsers(getUsers())
        }
    }

    function handleDelete(id) {
        Swal
            .fire({
                title: 'Are you sure?',
                text: 'This data will be lost forever',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Delete',
            })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal
                        .fire('Data has been deleted!', '', 'success')

                    const dlt = users.filter((data) => data._id !== id);
                    setUsers(dlt);
                    fetch(`http://localhost:5500/api/v1/teachers/${id}`, { method: 'DELETE' })
                        .then(() => console.log("success"));

                } else if (result.isDenied) {
                    Swal.close()
                }
            })
    };


    // //---OpenEditForm---//
    const handleEdit = (e, data) => {
        e.preventDefault();
        console.log(data._id);
        setEditId(data._id);
    };

    // //---HandleStudentEdit---//
    const submitEdit = (e, name, surname, birthdate, town, subject, subjectGroup) => {
        e.preventDefault();
        fetch(url + editId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                surname: surname,
                birthdate: birthdate,
                town: town,
                subject: subject,
                subjectGroup: subjectGroup
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                getUsers()
                cancelEdit();
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    // //---CancelStudentEdit---//
    function cancelEdit() {
        setEditId('')
        console.log('canceling')
    }

    const sorting = (col) => {
        if (sortValue === 'ASC') {
            const sorted = users.sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase ? 1 : -1
            );
            setUsers(sorted);
            setSortValue('DSC');
        }
        if (sortValue === 'DSC') {
            const sorted = users.sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase ? -1 : 1
            );
            setUsers(sorted);
            setSortValue('ASC');
        }
    }

    return (
        <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 navigation p-4'>
                <div className='d-flex flex-row align-items-center text-center'>
                    <Link to="/" className='navItem fw-bold mx-1 p-2'>Home</Link>
                    <Link to="/students" className='navItem fw-bold mx-1 p-2'>Students Page</Link>
                    <Link to="/teachers" className='navItem fw-bold mx-1 p-2'>Teachers Page</Link>
                    <Link to="/tform" className='navItem fw-bold mx-1 p-2'>Register teacher</Link>
                    <p className='counter text-warning fs-5'>Counted users: {users.length}</p>
                    <div className='search'>
                        <label><BiSearchAlt />Search:&nbsp;</label>
                        <input type="text" value={searchTerm} onChange={handleSearch} className='text-dark' placeholder='Search students...' />
                    </div>
                </div>
            </div>
            <table className='table mt-3'>
                <thead className='thead-dark text-center'>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Birthdate</th>
                        <th>Town</th>
                        <th onClick={() => sorting('subject')}>Subject</th>
                        <th onClick={() => sorting('subjectGroup')}>Subject Group</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {!loading ?
                        users.map((data) => (
                            <>
                                {editId === data._id ? (
                                    <Editinfo
                                        key={data._id}
                                        data={data}
                                        onCancel={cancelEdit}
                                        onSubmit={submitEdit}
                                    />
                                ) : (
                                    <Teacherscards
                                        key={data._id}
                                        id={data._id}
                                        data={data}
                                        onDelete={handleDelete}
                                        onEdit={handleEdit}
                                    />
                                )}
                            </>
                        ))
                        : <tr><td className='loader'>Loading...</td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TeachersMain