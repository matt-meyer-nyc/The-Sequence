import React from 'react';
import axios from 'axios';

import Add from '../components/Add';
import AjaxHelper from '../utils/AjaxHelpers';


const AddContainer = React.createClass({
  getInitialState: function() {
    return {

      Name: '',
      Movie1: '',
      Movie2: '',
      Movie3: '',
      Description: '',
      listAdded:''
    };
  },

  onChangeName: function(e) {
    this.setState({
      Name: e.target.value
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
      Name: this.state.Name,
      Movie1: this.state.Movie1,
      Movie2: this.state.Movie2,
      Movie3: this.state.Movie3,
      Description: this.state.Description
    }
    var movieArray = [this.state.Movie1, this.state.Movie2, this.state.Movie3];
console.log(this.state.Name);
for(var i = 0; i < movieArray.length; i++){

    AjaxHelper.getMovies(movieArray[i])
    .then(function(response){
      console.log(response.data.results[0].title);
      this.setState({
        listAdded: "added"
      });
    }.bind(this))
    .catch(function(err){
      console.warn('err');
      return err;
    })
  }
},




  render: function(){
    return(
      <div className="display">
        <Add onChangeName={this.onChangeName}
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
