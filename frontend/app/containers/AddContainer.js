import React from 'react';
import axios from 'axios';

import Add from '../components/Add';
import AjaxHelper from '../utils/AjaxHelpers';


const AddContainer = React.createClass({
  getInitialState: function() {
    return {

      Name: '',
      Title: '',
      Movie1: '',
      Movie2: '',
      Movie3: '',
      Description: '',
      listAdded:''
    };
  },

  onChangeAuthor: function(e) {
    this.setState({
      Author: e.target.value
    })
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
      Author: this.state.Author,
      Title: this.state.Title,
      Movie1: this.state.Movie1,
      Movie2: this.state.Movie2,
      Movie3: this.state.Movie3,
      Description: this.state.Description
    }
  var AddPlaylist = {author:'', playlists: [ { title:'', movies: [] }] }
  var movieArray = [this.state.Movie1, this.state.Movie2, this.state.Movie3];

AddPlaylist.author = (List.Author);
AddPlaylist.playlists[0].title = (List.Title);
console.log(List.Movie1);

console.log(List.Title);
for(var i = 0; i < movieArray.length; i++){

    AjaxHelper.getMovies(movieArray[i])
    .then(function(response){
      console.log(response.data.results[0]);
      console.log(response.data.results[0].release_year);

      var movieList = {
        title: response.data.results[0].title,
        poster: response.data.results[0].poster_240x342,
        year: response.data.results[0].release_year
      }
      AddPlaylist.playlists[0].movies.push(movieList);
      console.log('playlist',AddPlaylist);

    }.bind(this))
    .catch(function(err){
      console.warn('err', err);
      return err;
    });
  };
  //needs work
setTimeout(function(){
  AjaxHelper.addMovies(AddPlaylist)
  .then(function(response){
    console.log(response.data);
  }.bind(this))

  .catch(function(err){

    console.warn('err', err);
    return err;

  })
  }, 3000);

},

  render: function(){
    return(
      <div className="display">
        <Add onChangeAuthor={this.onChangeAuthor}
          onChangeTitle={this.onChangeTitle}
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
