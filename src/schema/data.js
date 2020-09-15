const posts = [
  { id: 1, title: 'post 1', body: 'post 1 content', author: 1 },
  { id: 2, title: 'post 2', body: 'post 2 content', author: 2 },
  { id: 3, title: 'post 3', body: 'post 3 content', author: 3 },
  { id: 4, title: 'post 4', body: 'post 4 content', author: 2 },
  { id: 5, title: 'post 5', body: 'post 5 content', author: 4 },
];

const users = [
  {
    id: 1,
    name: 'john',
    email: 'john@example.com',
    age: 27,
    friends: [3, 4],
  },
  { id: 2, name: 'jane', email: 'jane@example.com', age: 31, friends: [4] },
  {
    id: 3,
    name: 'jack',
    email: 'jack@example.com',
    age: 17,
    friends: [1, 2, 4],
  },
  { id: 4, name: 'jill', email: 'jill@example.com', age: 45 },
];

module.exports = {
  users,
  posts,
};
