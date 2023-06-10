import React from 'react';

function VideoFrame({ video }) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
    </div>

  )
}

export default VideoFrame;