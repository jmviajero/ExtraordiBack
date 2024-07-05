import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./gql/typeDefs.ts";
import { Query } from "./resolvers/Query.ts";
import { Character } from "./resolvers/Character.ts";
import { Episode } from "./resolvers/Episode.ts";
import { Location } from "./resolvers/Location.ts";




const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Character,
    Episode,
    Location
  }
})

const { url } = await startStandaloneServer(server);
console.info(` Server ready at ${url}`);