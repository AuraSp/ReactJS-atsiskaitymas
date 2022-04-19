import React from 'react'
import { useState } from 'react';
import './LessText.css';

export default function LessText(props) {
    // const { text, maxLength } = props;
    const [hidden, setHidden] = useState(true);

    let listData = [
        {
            id: 1,
            text: 'Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it.',
          maxLength: 35
        }
    ]
    listData.map((obj) => {
        if(obj.id ===1) {
            return {...obj};
        }
    })
    if (text.length <= maxLength) {
        return <span>{text}</span>;
    }

    return (
        <div className='bg-light p-4 text-center'>
            <span className='fs-4 p-0'>
                {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
                {hidden ? (
                    <a onClick={() => setHidden(false)} className='text-secondary'>
                        read more
                    </a>
                ) : (
                    <a onClick={() => setHidden(true)} className='text-secondary'>
                        read less
                    </a>
                )}
            </span>
        </div>
    );
}
