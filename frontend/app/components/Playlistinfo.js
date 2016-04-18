import React from 'react';

function PlaylistInfo (props) {

  return (
    <div>
      <form>
      <input
        type="text"
        onChange={props.onChange}
        />
      <button type="button" onClick={props.onSubmit}>Search</button>
      </form>
    </div>
  );
}

export default PlaylistInfo;
