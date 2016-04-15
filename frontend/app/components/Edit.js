import React from 'react'

function Edit (props) {
  return (
    <div>
      <label>Find Name to Update:</label>
      <input onChange={props.onChangeAuthor} />
      <br />
      <label>Change Name Here:</label>
      <input oncChange={props.onChangeNewAuthor} />
      <br />
      <label>Change Playlist Here:</label>
      <input onChange={props.onChangeNewPlaylist} />
      <br />
      <button onClick={props.onSubmit}>Change It!</button>
      <hr></hr>
  </div>
  )
}











export default Edit;
