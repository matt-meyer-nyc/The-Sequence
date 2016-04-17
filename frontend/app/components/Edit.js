import React from 'react'

function Edit (props) {
  return (
    <div>
      <label>Find Name to Update:</label>
      <input onChange={props.onChangeAuthor} />
      <br />
      <label>Change Name Here:</label>
      <input onChange={props.onChangeNewAuthor} />
      <br />
      <label>Change Title Here:</label>
      <input onChange={props.onChangeNewTitle} />
      <br />
      <button onClick={props.onSubmit}>Change It!</button>
      <hr></hr>
  </div>
  )
}











export default Edit;
