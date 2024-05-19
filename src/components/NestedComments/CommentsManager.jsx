import React, { useState } from 'react';
import CommentsList from './CommentsList';

const CommentsManager = ({ maxDepth }) => {
    const [comments, setComments] = useState([
        { id: 1, content: 'This is a comment', replies: [] },
        { id: 2, content: 'This is another comment', replies: [] },
    ]);

    const handleEdit = (id, newContent) => {
        const editComment = (comments) =>
            comments.map((comment) =>
                comment.id === id
                    ? { ...comment, content: newContent }
                    : { ...comment, replies: editComment(comment.replies) }
            );
        setComments(editComment(comments));
    };

    const handleDelete = (id) => {
        const deleteComment = (comments) =>
            comments.filter((comment) => comment.id !== id).map((comment) => ({
                ...comment,
                replies: deleteComment(comment.replies),
            }));
        setComments(deleteComment(comments));
    };

    const handleReply = (parentId) => {
        const replyContent = prompt('Enter your reply:');
        const addReply = (comments) =>
            comments.map((comment) =>
                comment.id === parentId
                    ? {
                        ...comment,
                        replies: [...comment.replies, { id: Date.now(), content: replyContent, replies: [] }],
                    }
                    : { ...comment, replies: addReply(comment.replies) }
            );
        setComments(addReply(comments));
    };

    return (
        <div>
            <CommentsList
                comments={comments}
                depth={0}
                maxDepth={maxDepth}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onReply={handleReply}
            />
        </div>
    );
};

export default CommentsManager;
