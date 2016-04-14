
import React from 'react';

function List(props){

 console.log("hello", props.movieList);
 const displayList = props.movieList.map((value) =>{
   return <li><a href="#/search"><img src={value.movies[0].poster} /> <p>{value.name}</p></a></li>;
 });

 return (
     <div>
       <input
         type="text"
         placeholder="search"
         onChange={props.onUpdateSearch}
         />
       <ul>
         {displayList}
       </ul>
     </div>
   );
}

export default List;
