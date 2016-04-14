import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
require("../css/main.css");

const Main = React.createClass({
  render: function(){
    return(
      <div>
        <Header/>
        <div className="container">{this.props.children}</div>
        <Footer />

      </div>
    )
  }
});

export default Main
