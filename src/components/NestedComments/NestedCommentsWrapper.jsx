import React from 'react';
import CommentsManager from './CommentsManager';

const NestedCommentsWrapper = () => {
    return (
        <div>
            <h1>Nested Comments</h1>
            <CommentsManager maxDepth={3} />
        </div>
    );
};

export default NestedCommentsWrapper;
