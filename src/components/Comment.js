import React from 'react';

function Comment({commentBody, commentUser}) {
  return (
    <div>
      <h2>{commentUser}</h2>
      <p>{commentBody}</p>
    </div>
  )
}

export default Comment;