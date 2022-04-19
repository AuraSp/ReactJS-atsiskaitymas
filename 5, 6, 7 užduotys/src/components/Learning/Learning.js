import React from 'react';

export default function Learning({ id, img, lang, status, changeStatus }) {
    return (
        <div className='col-4'>
            <div className='card' style={{ width: 18 + 'rem' }}>
                <img src={img} className='card-img-top p-2' alt='img' />
                <div className='card-body'>
                    <p className='card-text'>{lang}</p>
                    <p>{status ? 'Ismokau' : 'Mokausi'}</p>
                    <button onClick={() => changeStatus(id)} className='btn btn-light'>
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
}
