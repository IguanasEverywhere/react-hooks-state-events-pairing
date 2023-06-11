import React from 'react';
import Comment from './Comment';


function CommentsArea({ comments, filterAfterDelete }) {

  const vidComments = comments.map((comment) =>
    <Comment
      key={comment.id}
      id={comment.id}
      commentBody={comment.comment}
      commentUser={comment.user}
      filterAfterDelete={filterAfterDelete}
    />)

  return (
    <div>
      {vidComments}
    </div>
  )
}

export default CommentsArea;