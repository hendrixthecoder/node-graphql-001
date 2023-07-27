const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./Schemas')
const { PORT } = require('./config')

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))