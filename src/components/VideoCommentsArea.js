import React from 'react';
import SearchForm from './SearchForm';
import CommentsHeader from './CommentsHeader';
import CommentsArea from './CommentsArea';

function VideoCommentsArea({ comments, filterCommentsByAuthor, resetAllComments, filterAfterDelete }) {

  return (
    <div>
      <SearchForm filterCommentsByAuthor={filterCommentsByAuthor} resetAllComments={resetAllComments}/>
      <CommentsHeader numOfComments={comments.length}/>
      <CommentsArea filterAfterDelete={filterAfterDelete} comments={comments}/>
    </div>
  )
}

export default VideoCommentsArea;