import React from 'react';
import axios from 'axios';

import List from '../components/List';
import AjaxHelpers from '../utils/AjaxHelpers';

const ListContainer = React.createClass({
  getInitialState: function() {
    return {
      ajaxReturn: []
    };
  },

  componentDidMount: function() {
    AjaxHelpers.showMovies()
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
      <div className="display">
        <List movies={this.state.ajaxReturn}/>
      </div>
    )
  }
});

export default ListContainer;
