const { GraphQLSchema } = require("graphql");
const RootQuery = require('./RootQuery')
const MutationQuery = require('./Mutator')


const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: MutationQuery
})

module.exports = schema