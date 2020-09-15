const { GraphQLInt, GraphQLList } = require('graphql');
const { UserType } = require('./types');
const data = require('./data');

const query = {
  user: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
    },
    resolve: (parent, args) => data.users.find((user) => user.id === args.id),
  },
  users: {
    type: new GraphQLList(UserType),
    resolve: (parent, args) => data.users,
  },
};

module.exports = {
  type: UserType,
  query,
};
