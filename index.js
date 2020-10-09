const server = require('./graphql');

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`); // eslint-disable-line no-console
  });