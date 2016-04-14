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

    componentDidMount: function () {
      console.log("did mount");
     AjaxHelpers.findPlaylist(playlist)
     .then(function(respone) {
       console.log ('response data:', response.data)
       this.setState({
         axiosReply: response.data
         });
         console.log(axiosReply);
       }.bind(this));

         console.log('find playlist', this.state.name)
         const playlist = "hello fucker"
          //  name: this.state.name,
          //  playlist: this.state.playlist,
          //  movies: this.state.movies

       },


    render: function () {
      return (

          <PlaylistInfo
          name={playlist}
        />

      );
    }
  });



export default PlaylistInfoContainer;
