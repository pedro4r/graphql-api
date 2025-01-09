const { loadFilesSync } = require('@graphql-tools/load-files');
const { join } = require('path');

const typeDefs = loadFilesSync(join(__dirname, 'modules', '**', '*.gql'));
const resolvers = loadFilesSync(join(__dirname, 'modules', '**', 'resolvers.js'));

module.exports = { typeDefs, resolvers };