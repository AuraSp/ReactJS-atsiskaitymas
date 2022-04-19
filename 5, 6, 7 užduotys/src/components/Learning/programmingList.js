import React from 'react';
import Learning from './Learning';
import { useState } from 'react';

export default function ProgrammingList() {
    const learningList = [
        {
            id: 1,
            img: "https://cdn-icons-png.flaticon.com/512/732/732212.png?w=1060",
            language: "As mokausi HTML",
            status: false,
        },
        {
            id: 2,
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*R9vfWQrF0c223dm3wTTnGQ.jpeg&f=1&nofb=1",
            language: "As mokausi CSS",
            status: false,
        },
        {
            id: 3,
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.stateofdigital.com%2Fwp-content%2Fuploads%2F2019%2F10%2FJavaScript-code.jpg&f=1&nofb=1",
            language: "As mokausi JS",
            status: false,
        },
    ];

    const [postStatus, setPostStatus] = useState(learningList);

    function changeStatus(id) {
        const updateList = [...postStatus];
        updateList.forEach((data) => {
            if (data.id == id) {
                data.status = true;
            }
        });
        setPostStatus(updateList);
    }

    const learningListData = postStatus.map((data) => {
        return (
            <Learning
                id={data.id}
                lang={data.language}
                img={data.img}
                status={data.status}
                changeStatus={changeStatus}
            />
        );
    });

    return <>{learningListData}</>;
}
