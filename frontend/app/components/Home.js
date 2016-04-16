import React from 'react';
import {Link} from 'react-router';
import AjaxHelper from '../utils/AjaxHelpers'


const Home = React.createClass({
  render: function(){
    return(
      <div>
        <p>Home</p>
        <Link to="/list"><button >List page </button></Link>
        <br/><br/>
        <Link to="/search"><button>Search page </button></Link>
        <br/><br/>
        <Link to="/add"  ><button>Add page</button></Link>
        <Link to="/playlistInfo"><button>Playlist </button></Link>
        <Link to="/delete"><button>delete </button></Link>
      </div>
    )
  }
});




export default Home;
