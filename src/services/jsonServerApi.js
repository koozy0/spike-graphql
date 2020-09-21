const ApiService = require('./ApiService');
const config = require('../config');

const client = new ApiService({ baseURL: config.baseURL });

const jsonServerApi = {};

jsonServerApi.getAllUsers = (filter) => {
  return filter ? client.get(`/users?${filter}`) : client.get(`/users`);
};

jsonServerApi.getUserById = (id) => {
  return client.get(`/users/${id}`);
};

jsonServerApi.getAllPosts = (filter) => {
  return filter ? client.get(`/posts?${filter}`) : client.get('/posts');
};

jsonServerApi.getPostById = (id) => {
  return client.get(`/posts/${id}`);
};

module.exports = jsonServerApi;
