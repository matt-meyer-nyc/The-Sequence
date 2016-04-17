import React from 'react';
import Edit from '../components/Edit';
import AjaxHelpers from '../utils/AjaxHelpers';

const EditContainer = React.createClass ({
    getInitialState: function () {
      return {
        ajaxResponse: [],
        author: '',
        title: ''

      }
    },
    handleAuthor: function (e) {
      this.setState({
        author: e.target.value
      })
    },

    handleNewAuthor: function(e) {
      this.setState({
        newAuthor: e.target.value
      })
    },

    handleNewTitle: function(e) {
      this.setState({
        newTitle: e.target.value
      })
    },


     onSubmitUpdate: function () {
       console.log("author to change", this.state.author);
       const updateInfo = {
         author: this.state.author,
         newAuthor: this.state.newAuthor,
         newTitle: this.state.newTitle

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
        onChangeNewTitle={this.handleNewTitle}

        onSubmit={this.onSubmitUpdate}
        />
    );
   }
  });

export default EditContainer;
