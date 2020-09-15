const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql');
const data = require('./data');

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
        data.users.filter((user) => (parent.friends || []).includes(user.id)),
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: (parent, args) => {
        return data.posts.filter((post) => post.author === parent.id);
      },
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
      resolve: (parent, args) =>
        data.users.find((user) => user.id === parent.author),
    },
  }),
});

module.exports = {
  UserType,
  PostType,
};
