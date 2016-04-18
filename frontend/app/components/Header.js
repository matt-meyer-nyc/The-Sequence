import React from 'react';

function Header(props){
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/#/add">+</a> <a href="/#/delete">-</a></li>
          <li><h1><a href="/#/"><span>The</span>Sequence</a></h1></li>
          <li><a href="/#/search">Search</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
