import {ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:8081/query',
  cache: new InMemoryCache()
});

export default client;
