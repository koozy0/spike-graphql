const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { port } = require('./config');
const schema = require('./schema');

const app = express();

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log('gql:', req.method, req.url, req.body);
  next();
});

// graphql endpoint
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
app.use('/', (req, res) => res.json({ msg: 'ok' }));

app.listen(port, () => console.log(`Server started on port ${port}...`));
