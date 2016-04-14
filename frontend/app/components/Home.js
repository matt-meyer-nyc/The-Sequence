import React from 'react';
import {Link} from 'react-router';
import AjaxHelper from '../utils/AjaxHelpers'


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
      <div>
        <p>Home</p>
      </div>
    )
  }
});




export default Home;
