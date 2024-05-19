// CommentsList.js
import React from 'react';
import Comment from './Comment';

const CommentsList = ({ comments, depth, maxDepth, onEdit, onDelete, onReply }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          depth={depth}
          maxDepth={maxDepth}
          onEdit={onEdit}
          onDelete={onDelete}
          onReply={onReply}
        />
      ))}
    </div>
  );
};

export default CommentsList;
