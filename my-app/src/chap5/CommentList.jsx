import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김우림1",
        comment: "안냐세요",
    },
    {   
        name: "김우림2",
        comment: "안녕~"
    },
    {
        name: "김우림3",
        comment: "안녕하십니까?",
    },
];

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;