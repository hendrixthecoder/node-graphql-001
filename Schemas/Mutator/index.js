const { GraphQLObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } = require("graphql")
const UserType = require('../TypeDefs/UserType')
const { fetchOneUser, updateUser } = require('../../config')

const MutationQuery = new GraphQLObjectType({
    name: 'Mutator',
    description: 'Root Mutator',
    fields: {
        updateUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) },
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve: async (parent, args) => {
                const { id, firstName, lastName, email, password } = args
                const userToUpdate = await fetchOneUser(args.id)

                //update the user with the information passed in the query or default it to previous if null
                userToUpdate.firstName = firstName || userToUpdate.firstName;
                userToUpdate.lastName = lastName || userToUpdate.lastName;
                userToUpdate.email = email || userToUpdate.email;
                userToUpdate.password = password || userToUpdate.password;

                let user = await updateUser(id, userToUpdate)
                return user
            }
        }
    }
})

module.exports = MutationQuery