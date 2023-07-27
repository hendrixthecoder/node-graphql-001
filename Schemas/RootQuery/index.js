const { GraphQLList, GraphQLObjectType } = require("graphql")
const UserType = require('../TypeDefs/UserType')
const { fetchData } = require('../../config')

const RootQuery = new GraphQLObjectType({
    name: 'Root',
    description: 'Root Query',
    fields: {
        users: {
            type: GraphQLList(UserType),
            resolve: async () => {
                let users = await fetchData()
                return users
            }
        }
    }
})

module.exports = RootQuery