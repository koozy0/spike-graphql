const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const User = require('./user');
const Post = require('./post');

// RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    user: User.query.user,
    users: User.query.users,
    post: Post.query.post,
    posts: Post.query.posts,
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
