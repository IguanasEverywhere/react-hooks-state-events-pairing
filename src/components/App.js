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

  function  handleOtherInput(e) {
    let filteredComments = video.comments.filter((vid) => vid.user.includes(e.target.value));
    setCommentsToRender(filteredComments)
  }

  function filterAfterDelete(id) {
    let filteredComments = commentsToRender.filter((vid) => vid.id !== id);
    setCommentsToRender(filteredComments);
  }


  return (
    <div className="App">
      <VideoArea video={video} commentsVisible={commentsVisible} setCommentsVisible={setCommentsVisible} />
      <hr></hr>
      <input onChange={handleOtherInput} type="text" placeholder="other input"></input>
      {commentsVisible ?
        <VideoCommentsArea
          comments={commentsToRender}
          filterCommentsByAuthor={filterCommentsByAuthor}
          resetAllComments={resetAllComments}
          filterAfterDelete={filterAfterDelete}
        />
        : null}
    </div>
  );
}

export default App;
