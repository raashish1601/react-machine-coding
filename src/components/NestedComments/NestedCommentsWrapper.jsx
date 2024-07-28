import React from 'react';
import CommentsManager from './CommentsManager';

const NestedCommentsWrapper = () => {
    return (
        <div>
            <h1>Nested Comments</h1>
            <CommentsManager maxDepth={30} />
        </div>
    );
};

export default NestedCommentsWrapper;
