import React, { useState } from 'react';

function LikeDislikeArea({ upvotes=0, downvotes=0 }) {

  const [likes, setLikes] = useState(upvotes);
  const [dislikes, setDislikes] = useState(downvotes);

  function increaseLikes() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  function increaseDislkes() {
    setDislikes((prevDisLikes) => prevDisLikes + 1)
  }

  return (
    <div>
      <button onClick={increaseLikes}>👍 {likes}</button>
      <button onClick={increaseDislkes}>👎 {dislikes}</button>
    </div>
  )
}

export default LikeDislikeArea;