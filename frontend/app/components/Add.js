
import React from 'react';


function Add(props){



  return (
    <div>
      <h2>Add playlist</h2>
      <form onSubmit={props.onSubmitList}>
        <input onChange={props.onChangeAuthor} placeholder='Author' type='text' /><br/><br/>
        <input onChange={props.onChangeName} placeholder='Name' type='text' /><br/><br/>
        <input onChange={props.onChangeMovie1} placeholder='Movie 1' type='text' /><br/><br/>
        <input onChange={props.onChangeMovie2} placeholder='Movie 2' type='text' /><br/><br/>
        <input onChange={props.onChangeMovie3} placeholder='Movie 3' type='text' /><br/><br/>
        <button type='submit'>Add</button>
      </form>
      <h4>{props.listAddedMsg}</h4>
    </div>
  );
}


export default Add;
