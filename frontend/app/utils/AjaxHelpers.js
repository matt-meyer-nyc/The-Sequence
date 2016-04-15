import axios from 'axios';

const AjaxHelpers = {

  findMovie: function() {
    return axios.get('https://api-public.guidebox.com/v1.43/US/ooiQChiJ840yDpftEosaGioiDJQ0Yb/search/movie/title/+'+ movieArray +'/exact')
  },
  getMovies: function(movieArray){
    return axios.get('https://api-public.guidebox.com/v1.43/US/ooiQChiJ840yDpftEosaGioiDJQ0Yb/search/movie/title/+'+ movieArray +'/exact')
  },
  showMovies: function(){
    return axios.get('http://localhost:3000/movies');
  },
  addMovies: function(AddPlayList){
    return axios.post('http://localhost:3000/movies/add', AddPlayList);
  },
  findPlaylist: function(name) {
    return axios.get('http://localhost:3000/movies/' + name.name)
  },
  deleteAuthor: function (author) {
    return axios.delete('http://localhost:3000/movies/' + author.author)
  }

}
export default AjaxHelpers;
