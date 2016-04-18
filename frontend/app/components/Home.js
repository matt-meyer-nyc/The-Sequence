import React from 'react';
import {Link} from 'react-router';
import AjaxHelper from '../utils/AjaxHelpers'


const Home = React.createClass({
  render: function(){
    return(
      <div className="home">
        <section>
          <p>Keep track of any movie you own, watch or going to see by adding then in your personal movie list collection.</p>
        </section>

        <section className="container">
          <h2>Browse our users handpicked movie selection</h2>
          <Link to="/list"><button>Discover</button></Link>
        </section>
    </div>
    )
  }
});

export default Home;
