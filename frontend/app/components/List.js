import React from 'react';

function List(props){
  console.log(props);
  console.log(props.movies[0]);
  const MovieList = props.movies.map((movie) =>{
    return <li key={movie._id}>
      <a href="#/CollectionName/">
        <img src={movie.playlists[0].movies[0].poster} onClick={console.log('clicked')}/>
        <section>
          <h3>{movie.playlists[0].title}</h3>
          <p>{movie.author}</p>
        </section>
      </a>
    </li>;
  });
  return (
    <div className="movieList container">
      <nav>
        <ul>
          {MovieList}
        </ul>
      </nav>
    </div>
  );
}
export default List;
