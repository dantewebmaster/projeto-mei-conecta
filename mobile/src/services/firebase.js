import axios from 'axios';

const firebase = axios.create({
  baseURL: 'http://url.do.firebase',
});

export default firebase;
