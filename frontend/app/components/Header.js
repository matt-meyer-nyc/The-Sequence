import React from 'react';

function Header(props){
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/#/playlistInfo">Playlist</a> <a href="/#/add">+</a> <a href="/#/delete">-</a></li>
          <li><h1><a href="/#/list"><span>The</span>Sequence</a></h1></li>
          <li><a href="/#/search">Search</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
