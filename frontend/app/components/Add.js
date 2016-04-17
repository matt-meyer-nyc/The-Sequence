import React from 'react';

function Add(props){
  return (
    <div className="AddPlaylist container">
      <p>Add playlist</p>
      <form onSubmit={props.onSubmitList}>
        <input onChange={props.onChangeAuthor} placeholder='Author' type='text' />
        <input onChange={props.onChangeTitle} placeholder='Title' type='text' /><br/>
        <input onChange={props.onChangeMovie1} placeholder='Movie 1' type='text' /><br/>
        <input onChange={props.onChangeMovie2} placeholder='Movie 2' type='text' /><br/>
        <input onChange={props.onChangeMovie3} placeholder='Movie 3' type='text' /><br/>
        <button type='submit'>Add</button>
      </form>
      <h4>{props.listAddedMsg}</h4>
    </div>
  );
}

export default Add;
