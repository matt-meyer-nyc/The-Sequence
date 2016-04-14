import axios from 'axios';

const AjaxHelpers = {

  findMovie: function() {
    return axios.get('https://api-public.guidebox.com/v1.43/US/rKQmq5ZevhQ2PsowXhi1kZF0NvAB187o/search/movie/title/+'+ movieArray +'/exact')
  },
  getMovies: function(movieArray){
    return axios.get('https://api-public.guidebox.com/v1.43/US/rKQmq5ZevhQ2PsowXhi1kZF0NvAB187o/search/movie/title/+'+ movieArray +'/exact')
  },
  showMovies: function(){
    return axios.get('http://localhost:3000/movies');
  },
  addMovies: function(AddPlayist){
    return axios.post('http://localhost:3000/movies/add', AddPlayList);
  },
  findPlaylist: function (name) {
    return axios.get('http://localhost:3000/movies', name)
  }



}
export default AjaxHelpers;
