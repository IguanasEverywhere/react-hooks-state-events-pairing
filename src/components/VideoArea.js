import React from 'react';
import VideoFrame from './VideoFrame';
import DateAndViews from './DateAndViews';
import LikeDislikeArea from './LikeDislikeArea';

function VideoArea({video, commentsVisible, setCommentsVisible}) {

  function handleVisibleClick() {
    setCommentsVisible((prevVisible) => !prevVisible);
  }

  const btnTxt = commentsVisible ? 'Hide Comments' : 'Show Comments';

  return (
    <div>
      <VideoFrame video={video} />
      <h1>{video.title}</h1>
      <DateAndViews createdAt={video.createdAt} views={video.views}/>
      <LikeDislikeArea upvotes={video.upvotes} downvotes={video.downvotes}/>
      <button onClick={handleVisibleClick}>{btnTxt}</button>
    </div>
  )
}

export default VideoArea;