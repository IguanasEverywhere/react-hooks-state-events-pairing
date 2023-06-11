import React from 'react';
import LikeDislikeArea from './LikeDislikeArea';

function Comment({commentBody, commentUser, id, filterAfterDelete}) {

  function handleDelete() {
    filterAfterDelete(id);
  }

  return (
    <div>
      <h2>{commentUser}</h2>
      <p>{commentBody}</p>
      <LikeDislikeArea />
      <button onClick={handleDelete}>Delete This Comment</button>
    </div>
  )
}

export default Comment;