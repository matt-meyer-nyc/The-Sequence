import React from 'react';
import Edit from '../components/Edit';
import AjaxHelpers from '../utils/AjaxHelpers';

const EditContainer = React.createClass ({
    getInitialState: function () {
      return {
        ajaxResponse: [],
        author: '',
        playlist: ''

      }
    },
    handleAuthor: function (e) {
      this.setState({
        author: e.target.value
      })
    },

    handleNewAuthor: function(e) {
      this.setState({
        author: e.target.value
      })
    },

    handleNewPlaylist: function(e) {
      this.setState({
        playlist: e.target.value
      })
    },


     onSubmit: function () {
       console.log("author to change", this.state.author);
       const updateInfo = {
         author: this.state.author,
         newAuthor: this.state.newAuthor,
         newPlaylist: this.state.newPlaylist,

       };
       AjaxHelpers.updateInfo(updateInfo)
       .then(function(response) {
        console.log('response.data', response.data);
        this.setState({
          ajaxResponse: response.data
        });
      }.bind(this));
    },
    render: function () {
    return (
      <Edit
        onChangeAuthor={this.handleAuthor}
        onChangeNewAuthor={this.handleNewAuthor}
        onChangeNewPlaylist={this.handleNewPlaylist}

        onSubmit={this.onSubmit}
        />
    );
   }
  });

export default EditContainer;
