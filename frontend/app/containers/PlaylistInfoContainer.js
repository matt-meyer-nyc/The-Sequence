import React from 'react';
import PlaylistInfo from '../components/PlaylistInfo';
import AjaxHelpers from '../utils/AjaxHelpers';

const PlaylistInfoContainer = React.createClass({
 getInitialState: function(){
   return {
     author: ''

   }
 },
 authorFind: function (e) {
   this.setState({
     author: e.target.value
   })
 },

  onSubmit: function (e) {
    console.log("did mount");
    console.log("find this author", this.state.author);

    const details = {
      author: this.state.author,
    };
   AjaxHelpers.findPlaylist(details)
   .then(function(response) {
     console.log ('response data:', response.data)
     this.setState({
       author: response.data.author
       });
     }.bind(this));
   },
    render: function () {
      return (

          <PlaylistInfo
          onChange={this.authorFind}
          onSubmit={this.onSubmit}
        />

      );
    }
  });



export default PlaylistInfoContainer;
