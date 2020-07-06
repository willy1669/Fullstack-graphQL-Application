/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */


module.exports = {
  Query: {
    me() {
      return {
        id: 1,
        email: "williamschinonso11@gmail.com",
        avatar: "http://yoda.png",
        friends: [],
        shoes: [],
      };
    },

    pets(_, { input }, ctx) {
      return ctx.models.Pet.findMany(input);
    },
    shoes(_, { input }) {
      return [
        { brand: "nike", size: 26 },
        { brand: "reebok", size: 32 },
        { brand: "addidas", size: 45 },
      ].filter((shoe) => shoe.brand === input.brand);
    },
    allShoes(_, { input }) {
      return [
        { brand: "JORDAN", size: 12, sport: "basketball", user: 1 },
        { brand: "NIKE", size: 32, hasGrip: true, user: 1 },
        { brand: "ADIDDAS", size: 45, hasGrip: false, user: 1 },
      ];
    },
    searchShoes(_, { input }) {
      return [
        { brand: "JORDAN", size: 12, sport: "basketball" },
        { brand: "NIKE", size: 32, hasGrip: true },
        { brand: "ADIDDAS", size: 45, hasGrip: false },
      ];
    },
    pet(_, { input }, ctx) {
      return ctx.models.findOne(input);
    },
  },
  Mutation: {
    newShoe(_, { input }) {
      return input;
    },
    newPet(_, { input }, ctx) {
      const pet = ctx.models.Pet.create(input);
      return pet;
    },
  },
  Shoe: {
    __resolveType(shoe) {
      if (shoe.sport) return "Sneaker";
      return "Boot";
    },
  },
  
  FootWear: {
    __resolveType(shoe) {
      if (shoe.sport) return "Sneaker";
      return "Boot";
    },
  },
  Pet: {
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    }
  },
  User: {},
};
