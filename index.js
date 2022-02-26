const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
// graph ql
const TypeDefs = require('./schema');
const Resolvers = require('./resolver');

const dotenv = require('dotenv')
dotenv.config()

//import ApolloServer
const { ApolloServer } = require('apollo-server-express')

//TODO - Replace you Connection String here
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

//Define Apollo Server
const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers
})


//Define Express Server
const app = express();
app.use(express.json());
app.use('*', cors());

//Add Express app as middleware to Apollo Server
server.applyMiddleware({app})

// start listening
app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`));