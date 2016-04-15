import React from 'react';
import PlaylistInfo from '../components/PlaylistInfo';
import AjaxHelpers from '../utils/AjaxHelpers';

const PlaylistInfoContainer = React.createClass({
 getInitialState: function(){
   return {
     name: '',
     playlist: '',
     movies: [],
     isLoading: true,
   }
 },
    onSubmit: function (e) {
      console.log("did mount");
      console.log("find this name", this.state.name);
      const details = {
        name: this.state.name,
        playlist: this.state.playlist,
        movies: this.state.movies
      };
     AjaxHelpers.getPlaylists(details)
     .then(function(response) {
       console.log ('response data:', response.data)
       this.setState({
         name: response.data.name,
         playlist: this.state.playlist,
         movies: this.state.movies

         });
       }.bind(this));
     },
    render: function () {
      return (
          <PlaylistInfo
          onChange={this.details}
          onSubmit={this.onSubmit}
        />

      );
    }
  });
export default PlaylistInfoContainer;
