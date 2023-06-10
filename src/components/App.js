import React, { useState } from 'react';
import video from "../data/video.js";
import VideoArea from './VideoArea';
import VideoCommentsArea from './VideoCommentsArea';

function App() {
  console.log("Here's your data:", video);

  const [commentsVisible, setCommentsVisible] = useState(true);

  return (
    <div className="App">
      <VideoArea video={video} commentsVisible={commentsVisible} setCommentsVisible={setCommentsVisible} />
      <hr></hr>
      {commentsVisible ? <VideoCommentsArea video={video} /> : null}
    </div>
  );
}

export default App;
