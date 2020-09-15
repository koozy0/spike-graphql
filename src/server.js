const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const config = require('./config');
const schema = require('./schema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(config.port, () =>
  console.log(`Server started on port ${config.port}...`),
);
