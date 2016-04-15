import React from 'react';
import Delete from '../components/Delete';
import AjaxHelpers from '../utils/AjaxHelpers';

const DeleteContainer = React.createClass({
 getInitialState: function(){
   return {
     author: ''
   }
 },

 authorInput: function (e) {
   this.setState({
     author: e.target.value
   })
 },
  onSubmit: function () {
   console.log("delete author", this.state.author);
   const author = {
    author: this.state.author
   };
   AjaxHelpers.deleteAuthor(author)
   .then(function(response){
     console.log("response.data",response.data);
     this.setState({
       author: response.data
     });
   }.bind(this));
 },

 render: function () {
   return (

     <Delete
       onChange={this.authorInput}
       onSubmit={this.onSubmit}
       />
   )
 }
});

export default DeleteContainer;
