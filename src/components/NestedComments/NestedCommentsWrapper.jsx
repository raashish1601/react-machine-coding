import React, { useState } from 'react';

const initialComments = [
  {
    id: 1,
    text: "This is the first comment",
    replies: [
      {
        id: 2,
        text: "This is a reply to the first comment",
        replies: [
          {
            id: 3,
            text: "This is a reply to the reply",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 4,
    text: "This is the second comment",
    replies: [
      {
        id: 5,
        text: "This is a reply to the second comment",
        replies: [
          {
            id: 6,
            text: "This is another reply to the reply",
            replies: [
              {
                id: 7,
                text: "This is a nested reply",
                replies: []
              }
            ]
          }
        ]
      }
    ]
  }
];

function NestedCommentsWrapper() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [editingComment, setEditingComment] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [replyText, setReplyText] = useState('');

  const addComment = () => {
    if (newComment.trim() === '') return;

    const updatedComments = [...comments, {
      id: Date.now(),
      text: newComment,
      replies: []
    }];

    setComments(updatedComments);
    setNewComment('');
  };

  const updateComment = (commentId, text) => {
    const updateNestedComment = (comments, commentId, text) => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, text };
        } else {
          return {
            ...comment,
            replies: updateNestedComment(comment.replies, commentId, text)
          };
        }
      });
    };

    setComments(updateNestedComment(comments, commentId, text));
    setEditingComment(null);
    setEditingText('');
  };

  const deleteComment = (commentId) => {
    const deleteNestedComment = (comments, commentId) => {
      return comments.filter(comment => comment.id !== commentId).map(comment => ({
        ...comment,
        replies: deleteNestedComment(comment.replies, commentId)
      }));
    };

    setComments(deleteNestedComment(comments, commentId));
  };

  const addReply = (commentId, text) => {
    if (text.trim() === '') return;

    const addNestedReply = (comments, commentId, text) => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, {
              id: Date.now(),
              text,
              replies: []
            }]
          };
        } else {
          return {
            ...comment,
            replies: addNestedReply(comment.replies, commentId, text)
          };
        }
      });
    };

    setComments(addNestedReply(comments, commentId, text));
    setReplyTo(null);
    setReplyText('');
  };

  const renderComments = (comments) => {
    return comments.map(comment => (
      <div style={{ marginTop: "25px" }} key={comment.id} className="comment">
        {editingComment === comment.id ? (
          <textarea
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
        ) : (
          <div>{comment.text}</div>
        )}
        <button onClick={() => setReplyTo(comment.id)}>Reply</button>
        <button onClick={() => deleteComment(comment.id)}>Delete</button>
        {editingComment === comment.id ? (
          <button onClick={() => updateComment(comment.id, editingText)}>Save</button>
        ) : (
          <button onClick={() => {
            setEditingComment(comment.id);
            setEditingText(comment.text);
          }}>Edit</button>
        )}
        {replyTo === comment.id && (
          <div>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button onClick={() => addReply(comment.id, replyText)}>Add Reply</button>
          </div>
        )}
        {comment.replies.length > 0 && (
          <div style={{ marginLeft: '20px' }} className="replies">
            {renderComments(comment.replies)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="NestedCommentsWrapper">
      <h1>Comments</h1>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={addComment}>Add Comment</button>
      <div style={{ marginTop: '30px' }}>{renderComments(comments)}</div>
    </div>
  );
}

export default NestedCommentsWrapper;