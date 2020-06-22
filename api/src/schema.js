const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
      id: ID!
      userame: String!
      name: String!
      firstName: String!
      lastName: String!
  }

  type Pet {
      id: ID!
      createdAt: String!
      name: String!
      type: String!
  }

  input PetInput {
      name: String
      type: String
  }

  type Query {
      pets(type: String!): [Pet]!
  }

`;

module.exports = typeDefs
