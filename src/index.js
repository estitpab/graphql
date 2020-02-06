import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import dataSources from './dataSources'


const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    tracing: true,
    dataSources: () => ({
        ...dataSources,
    }),
});


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});