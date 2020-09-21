const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} = require('graphql');
const api = require('./services/jsonServerApi');

// Person - avoid infinite depth queries
const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

// User
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
    friends: {
      type: new GraphQLList(PersonType),
      resolve: (parent, args) =>
        parent.friends
          ? api.getAllUsers(
              parent.friends.map((friend) => `id=${friend}`).join('&'),
            )
          : [], // select * from users where user.id = friend.id
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: (parent, args) => api.getAllPosts(`author=${parent.id}`),
    },
  }),
});

// Post
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    author: {
      type: PersonType,
      resolve: (parent, args) => api.getUserById(parent.author),
    },
  }),
});

// RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => api.getUserById(args.id),
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: (parent, args) => api.getAllUsers(),
    },
    post: {
      type: PostType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => api.getPostById(args.id),
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: (parent, args) => api.getAllPosts(),
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
