import React, { useState } from 'react';

export function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    function delComment(id) {
        setComments(comments.filter(comment => comment.id !== id));
    }

    return comments.map((comment) => (
        <div key={comment.id}>
            {comment.text}
            <button onClick={() => delComment(comment.id)}>delete</button>
        </div>
    ));
}

export default CommentsList