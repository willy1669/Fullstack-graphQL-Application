const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  enum ShoeType {
    JORDAN
    ADIDDAS
    NIKE
    REEBOK
  }
  type User {
    id: ID!
    userame: String!
    name: String!
    firstName: String!
    lastName: String!
  }

  type Address {
      city: String!
      street: String!
      state: String!
      Province: String!
      Number: Int!
  }
  type BankInfo {
    name: String!
    number: Int! 
}
  type Shoe {
    size: Int!
    brand: String!
  }

  input ShoeInput {
    brand: String
    size: Int
  }

  input NewShoeInput {  
    brand: String!
    size: Int!
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

  input NewPetInput {
      name: String!
      type: String!
  }
  type Query {
    shoes(input: ShoeInput): [Shoe]!
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet
  }

  type Mutation {
      newShoe(input: NewShoeInput!): Shoe!
      newPet(input: NewPetInput!): Pet!
  }
`;

module.exports = typeDefs;
