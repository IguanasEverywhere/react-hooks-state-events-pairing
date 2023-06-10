import React from 'react';
import Comment from './Comment';


function CommentsArea({ comments }) {

  const vidComments = comments.map((comment) =>
    <Comment
      key={comment.id}
      commentBody={comment.comment}
      commentUser={comment.user}
    />)

  return (
    <div>
      {vidComments}
    </div>
  )
}

export default CommentsArea;