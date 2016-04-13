import axios from 'axios';

const AjaxHelpers = {

  findMovie: function(name) {
    return axios.get('https://api-public.guidebox.com/v1.43/US/b5pWO2d8FjWYHZ7gWXPmUQJGZa2oJK/search/movie/title/TheMatrix/exact');

  },



}
export default AjaxHelpers;
