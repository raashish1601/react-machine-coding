import React, { useState } from 'react';
import CommentsList from './CommentsList';

const Comment = ({ comment, depth, maxDepth, onEdit, onDelete, onReply }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState(comment.content);

    const handleEdit = () => {
        if (isEditing) {
            onEdit(comment.id, newContent);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div style={{ marginLeft: depth * 20 }}>
            {isEditing ? (
                <textarea value={newContent} onChange={(e) => setNewContent(e.target.value)} />
            ) : (
                <p>{comment.content}</p>
            )}
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            <button onClick={() => onDelete(comment.id)}>Delete</button>
            {depth < maxDepth && <button onClick={() => onReply(comment.id)}>Reply</button>}
            {comment.replies && (
                <CommentsList
                    comments={comment.replies}
                    depth={depth + 1}
                    maxDepth={maxDepth}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onReply={onReply}
                />
            )}
        </div>
    );
};

export default Comment;
