import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
require("../css/main.css");

const Main = React.createClass({
  render: function(){
    return(
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
});

export default Main
