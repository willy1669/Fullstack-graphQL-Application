/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, { input }, ctx) {
      return ctx.models.Pet.findMany();
    },
    shoes(_, { input }) {
      return [
        { brand: "nike", size: 26 },
        { brand: "reebok", size: 32 },
        { brand: "addidas", size: 45 },
      ].filter((shoe) => shoe.brand === input.brand);
    },
  },
  // Mutation: {

  // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  User: {},
};
