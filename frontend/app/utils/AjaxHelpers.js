import axios from 'axios';

const AjaxHelpers = {

  findMovie: function(name) {
    return axios.get('https://api-public.guidebox.com/v1.43/US/b5pWO2d8FjWYHZ7gWXPmUQJGZa2oJK/search/movie/title/TheMatrix/exact');

  },
  showMovies: function(){
    return axios.get('http://localhost:3000/movies');
  },
  getMovies: function(Title){
    return axios.get('https://api-public.guidebox.com/v1.43/US/b5pWO2d8FjWYHZ7gWXPmUQJGZa2oJK/search/movie/title/+'+ Title +'/exact')
  }


}
export default AjaxHelpers;
