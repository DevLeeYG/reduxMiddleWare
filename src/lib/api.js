import axios from "axios";

export const getPost = (id) => {
  return axios.get(`https://jsonplacheholder.typicode.com/posts/${id}`);
};

export const getUsers = (id) => {
  return axios.get(`https://jsonplacheholder.typicode.com/users`);
};
