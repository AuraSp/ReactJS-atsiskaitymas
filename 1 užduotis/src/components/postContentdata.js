import React, { Fragment } from "react";
import PostContent from "./PostContent";
// import { v4 as uuidv4 } from "uuid";

export default function PostData() {
    let data = [
        {
            id: 1,
            title: "React is Not A Framework",
            content: "Even all the professional React developers says that React is a Javascript framework. According to the official website of React it is a JavaScript library for building user interfaces, so the short answer is that React is a JavaScript library, but the fact remains that it has several characteristics of a framework.",
        },
        {
            id: 2,
            title: "React is Not Just a Fad",
            content: "At this point in time, the enterprise adoption of React is so high that it’s possible to say with confidence that React is not just a fad. From Facebook to Netflix to Khan Academy, there are thousands of high-profile companies that have successfully adopted React and used it to create massively successful digital products.",
        },
        {
            id: 3,
            title: "React Has a Strong Community",
            content: "Developers love React, and it shows in how strong the community around it is. React’s official website lists multiple thriving React communities, each with thousands of users who are happy to share their experience, give useful tips, and answer code-level questions.",
        },
    ];

    let list = data.map((post) => {
        return (
            <PostContent
                key={post.id}
                title={post.title}
                content={post.content}
            />
        );
    });

    return <Fragment>{list}</Fragment>;
}
