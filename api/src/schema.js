const { gql } = require("apollo-server");


// union FootWear = Sneaker | Boot
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

  type NewUser {
    email: String!
    avatar: String
    friends: [NewUser!]!
    shoes: [Shoe]!
}

  type EmploymentStatus {
    status: Boolean!
  }

  interface Shoe {
    size: Int!
    brand: ShoeType!
    user: NewUser!
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
  type Sneaker implements Shoe {
    size: Int!
    brand: ShoeType!
    sport: String!
    user: NewUser!
  }

  type Boot implements Shoe {
    size: Int!
    brand: ShoeType!
    hasGrip: Boolean!
    user: NewUser!
  }

  input ShoeInput {
    brand: ShoeType
    size: Int
  }

  input NewShoeInput {  
    brand: ShoeType!
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
    me: NewUser!
    shoes(input: ShoeInput): [Shoe]!
    allShoes(input: ShoeInput): [Shoe]!
    searchShoes(input: ShoeInput): [Shoe]!
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet
  }

  type Mutation {
      newShoe(input: NewShoeInput!): Shoe!
      newPet(input: NewPetInput!): Pet!
  }
`;

module.exports = typeDefs;
