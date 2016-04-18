import axios from 'axios';

const AjaxHelpers = {

  findMovie: function() {
    return axios.get('https://api-public.guidebox.com/v1.43/US/rKhuJkXJ8M9fIKSJDUm2eqsz2QiOVR8A/search/movie/title/+'+ movieArray +'/exact')
  },
  getMovies: function(movieArray){
    return axios.get('https://api-public.guidebox.com/v1.43/US/rKhuJkXJ8M9fIKSJDUm2eqsz2QiOVR8A/search/movie/title/+'+ movieArray +'/exact')
  },
  showMovies: function(){
    return axios.get('http://localhost:3000/movies');
  },
  addMovies: function(AddPlayList){
    return axios.post('http://localhost:3000/movies/add', AddPlayList);
  },
  findPlaylist: function(author) {
    return axios.get('http://localhost:3000/movies/' + author.author)
  },
  deleteAuthor: function (author) {
    return axios.delete('http://localhost:3000/movies/' + author.author)
  },
  updateInfo: function (updateInfo) {
    return axios.put('http://localhost:3000/movies/' + updateInfo.author, updateInfo)
  }
}

export default AjaxHelpers;
