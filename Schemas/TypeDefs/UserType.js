const { GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } = require("graphql")


const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'This is a user',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
    })
})

module.exports = UserType