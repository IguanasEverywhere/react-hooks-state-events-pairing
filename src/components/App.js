import React, { useState } from 'react';
import video from "../data/video.js";
import VideoArea from './VideoArea';
import VideoCommentsArea from './VideoCommentsArea';

function App() {
  console.log("Here's your data:", video);

  const [commentsVisible, setCommentsVisible] = useState(true);
  const [commentsToRender, setCommentsToRender] = useState(video.comments);

  function filterCommentsByAuthor(formData) {
    let filteredComments = commentsToRender.filter((vid) => vid.user.includes(formData));
    setCommentsToRender(filteredComments)
  }

  function resetAllComments() {
    setCommentsToRender(video.comments);
  }


  return (
    <div className="App">
      <VideoArea video={video} commentsVisible={commentsVisible} setCommentsVisible={setCommentsVisible} />
      <hr></hr>
      {commentsVisible ?
        <VideoCommentsArea
          comments={commentsToRender}
          filterCommentsByAuthor={filterCommentsByAuthor}
          resetAllComments={resetAllComments}
        />
        : null}
    </div>
  );
}

export default App;
