import React from 'react';
import _ from 'lodash';
import List from '../components/List';
import ajaxHelpers from '../utils/ajaxHelpers';

const ListContainer = React.createClass({
 getInitialState: function(){
   return {
     searchTerm: '',
     isLoading: true,
     movies: []
   }
 },
 onUpdateSearch: function(e){
   console.log(e.target.value);
   this.setState({
     searchTerm: e.target.value
   });
 },
 componentDidMount: function(){
   // runs after ui renders
   ajaxHelpers.showMovies()
   // TODO add catch
   .then(function(response){
       this.setState({
         movies: response.data[0].playlists
       });
   }.bind(this));
 },

 render: function () {

 return (
    <List
      movieList={this.state.movies}
      onUpdateSearch={this.onUpdateSearch}
    />

  );
 }
});

export default ListContainer;
