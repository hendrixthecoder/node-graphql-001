const { GraphQLList, GraphQLObjectType, GraphQLInt, GraphQLNonNull } = require("graphql")
const UserType = require('../TypeDefs/UserType')
const { fetchAllUSers, fetchOneUser } = require('../../config')

const RootQuery = new GraphQLObjectType({
    name: 'Root',
    description: 'Root Query',
    fields: {
        users: {
            type: GraphQLList(UserType),
            resolve: async () => {
                let users = await fetchAllUSers()
                return users
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLNonNull(GraphQLInt) } },
            resolve: async (parent, args) => {
                const { id } = args
                let user = await fetchOneUser(id)
                return user
            }
        }
    }
})

module.exports = RootQuery