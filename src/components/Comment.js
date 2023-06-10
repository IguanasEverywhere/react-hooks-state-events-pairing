import React from 'react';
import LikeDislikeArea from './LikeDislikeArea';

function Comment({commentBody, commentUser}) {
  return (
    <div>
      <h2>{commentUser}</h2>
      <p>{commentBody}</p>
      <LikeDislikeArea />
    </div>
  )
}

export default Comment;