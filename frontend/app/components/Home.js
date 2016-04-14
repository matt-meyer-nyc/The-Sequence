import React from 'react';
import {Link} from 'react-router';
import AjaxHelper from '../utils/AjaxHelpers'

// Style setup
// var divStyle = {
//   body: 'body'
// }
//
// var divStyle = {
//   backgroundColor: 'black'
//   // backgroundImage: 'url(' + imgUrl + ')',
//   // WebkitTransition: 'all', // note the capital 'W' here
//   // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
// },
// h3:{
//   backgroundColor: 'green'
// }
//
// };



// global css for buttons
var btnPushStyle = {
  backgroundColor: 'brown',
  color:"white",
  border: "0px",
  width:"100px",
  marginLeft:"10px"
}

for (var i = 0; i < btnPushStyle.length; i++) {
  console.log(btnPushStyle[i]);
}


const Home = React.createClass({
  clicked:function(){
    console.log('clicked');
    AjaxHelper.findMovie()
    .then(function(response){
      console.log(response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this))
    .catch(function(err){
      console.warn('err');
      return err;
    })
  },





  render: function(){
    return(

      <div style={{
          background: "black",
          color: "red"
        }}>
        <h3 style={{
            background: "green",
            color: "yellow"
          }}>Home</h3>
        <Link to="/list"><button style={btnPushStyle}>List page </button></Link>
        <br/><br/>
        <Link to="/search"><button style={btnPushStyle}>Search page </button></Link>
        <br/><br/>
        <Link to="/add"><button style={btnPushStyle}>Add page</button></Link>
        <button style={btnPushStyle} onClick={this.clicked}>submit</button>
      </div>
    )
  }
});

export default Home;
