import React from 'react';

function DateAndViews({createdAt, views}) {

  return (
    <div>
      <h3>{views} Views | Uploaded {createdAt}</h3>
    </div>
  )
}

export default DateAndViews;