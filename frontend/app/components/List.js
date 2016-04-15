import React from 'react';

function List(props){
  console.log(props);
  console.log(props.movies[0]);
  const MovieList = props.movies.map((movie) =>{
    return <li key={movie._id}>


      <b>Title:</b> {movie.playlists[0].title}<br/>
      <b>Author:</b> {movie.author}<br/>
      <img src={movie.playlists[0].movies[0].poster} onClick={console.log('clicked')}/>


    </li>;
  });
  return (
    <div>
      <h2>Playlists </h2>
      <ul>
        {MovieList}
      </ul>
    </div>
  );
}
export default List;
