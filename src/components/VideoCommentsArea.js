import React from 'react';
import SearchForm from './SearchForm';
import CommentsHeader from './CommentsHeader';
import CommentsArea from './CommentsArea';

function VideoCommentsArea({ video }) {

  return (
    <div>
      <SearchForm />
      <CommentsHeader numOfComments={video.comments.length}/>
      <CommentsArea comments={video.comments}/>
    </div>
  )
}

export default VideoCommentsArea;