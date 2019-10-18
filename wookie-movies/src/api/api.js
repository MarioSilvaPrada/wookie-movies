import axios from 'axios';

export default axios.create({
    baseURL: 'https://wookie.codesubmit.io/movies',
    headers: {'Authorization': 'Bearer Wookie2019'}
});