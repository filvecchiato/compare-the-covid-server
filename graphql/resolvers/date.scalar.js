const  {Kind} = require('graphql/language');
const  {GraphQLScalarType} = require('graphql');

const returnOnError = (operation, alternative) => {
  try {
    return operation();
  } catch (e) {
    return alternative;
  }
};

function serialize(value) {
  return value instanceof Date ? value.toISOString() : null;
}

function parseValue(value) {
  return returnOnError(() => value == null ? null : new Date(value), null);
}

function parseLiteral(ast) {
  return ast.kind === Kind.STRING ? parseValue(ast.value) : null;
}

const DateScalar = new GraphQLScalarType({
  name: 'ISODate',
  description: 'JavaScript Date object as an ISO timestamp',
  serialize, parseValue, parseLiteral
});

module.exports = DateScalar;