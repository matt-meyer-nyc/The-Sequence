import React from 'react';
import axios from 'axios';

import Add from '../components/Add';
import AjaxHelper from '../utils/AjaxHelpers';


const AddContainer = React.createClass({
  getInitialState: function() {
    return {

      Title: '',
      Movie1: '',
      Movie2: '',
      Movie3: '',
      Description: '',
      listAdded:''
    };
  },

  onChangeTitle: function(e) {
    this.setState({
      Title: e.target.value
    })
  },
  onChangeMovie1: function(e) {
    this.setState({
      Movie1: e.target.value
    })
  },
  onChangeMovie2: function(e) {
    this.setState({
      Movie2: e.target.value
    })
  },
  onChangeMovie3: function(e) {
    this.setState({
      Movie3: e.target.value
    })
  },
  onChangeDes: function(e) {
    this.setState({
      Description: e.target.value
    })
  },
  onSubmitList: function(e) {
    e.preventDefault();
    const List = {
      Title: this.state.Title,
      Movie1: this.state.Movie1,
      Movie2: this.state.Movie2,
      Movie3: this.state.Movie3,
      Description: this.state.Description
    }
  
    console.log(List);

    AjaxHelper.getMovies(List)
    .then(function(response){
      console.log(response.data);
      this.setState({
        listAdded: "added"
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
        <Add onChangeTitle={this.onChangeTitle}
          onChangeMovie1={this.onChangeMovie1}
          onChangeMovie2={this.onChangeMovie2}
          onChangeMovie3={this.onChangeMovie3}
          onSubmitList={this.onSubmitList}
          listAddedMsg={this.state.listAdded} />
      </div>
    )
  }
});

export default AddContainer;
