import axios from 'axios';

export const createPost = ({ title, body, user }: any) =>
  axios.post('/post', { title, body, user });
