const { GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } = require("graphql")
const UserType = require('../TypeDefs/UserType')
const { BASE_URL } = require('../../config')

const MutationQuery = new GraphQLObjectType({
    name: 'Mutator',
    description: 'Root Mutator',
    fields: {
        updateUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) },
                firstName: { type: GraphQLNonNull(GraphQLString) },
                lastName: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                const updatedFields = { ...args }
                const response = await axios.put(`${BASE_URL}/${args.id}`, updatedFields)
                return response.data
            }
        }
    }
})

module.exports = MutationQuery