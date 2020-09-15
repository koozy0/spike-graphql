const { GraphQLInt, GraphQLList } = require('graphql');
const { PostType } = require('./types');
const data = require('./data');

const query = {
  post: {
    type: PostType,
    args: {
      id: { type: GraphQLInt },
    },
    resolve: (parent, args) => data.posts.find((post) => post.id === args.id),
  },
  posts: {
    type: new GraphQLList(PostType),
    resolve: (parent, args) => data.posts,
  },
};

module.exports = {
  type: PostType,
  query,
};
