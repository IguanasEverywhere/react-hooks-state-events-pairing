import React, { useState } from 'react';

function SearchForm({ filterCommentsByAuthor, resetAllComments }) {

  const [formData, setFormData] = useState('');

  function handleSearchFormChange(e) {
    setFormData(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    filterCommentsByAuthor(formData);
  }

  function viewAllComments() {
    setFormData('');
    resetAllComments();
  }


  return (
    <form onSubmit={handleSearchSubmit}>
      <input onChange={handleSearchFormChange} type='text' placeholder='Search Comments...' value={formData}></input>
      <input type="submit"></input>
      <button onClick={viewAllComments}>View All Unsorted Comments</button>
    </form>
  )
}

export default SearchForm;