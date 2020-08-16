import {InMemoryCache, NormalizedCacheObject} from "apollo-cache-inmemory";
import {ApolloClient} from "apollo-client";
import {HttpLink} from "apollo-link-http";
import {resolvers, typeDefs} from "./resolvers";
import gql from "graphql-tag";
import injectStyles from "./styles";
import {RouterConfiguration, Router} from 'aurelia-router';
import {PLATFORM} from "aurelia-framework";

// Set up our apollo-client to point at the server we created
// this can be local or a remote endpoint
const cache = new InMemoryCache();
export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
      authorization: localStorage.getItem('token'),
      'client-name': 'Space Explorer [web]',
      'client-version': '1.0.0',
    },
  }),
  resolvers,
  typeDefs,
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
    cartItems: [],
  },
});
/**
 * Render our app
 * - We wrap the whole app with ApolloProvider, so any component in the app can
 *    make GraphqL requests. Our provider needs the client we created above,
 *    so we pass it as a prop
 * - We need a router, so we can navigate the app. We're using Reach router for this.
 *    The router chooses between which component to render, depending on the url path.
 *    ex: localhost:3000/login will render only the `Login` component
 */

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export class App {
  isLoggedIn;

  router: Router;

  activate() {
    injectStyles();
    return client.query({query: IS_LOGGED_IN})
      .then(result => result.data)
      .then(data => this.isLoggedIn = data);
  }

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      {route: '', name: 'launches', moduleId: PLATFORM.moduleName('pages/launches')},
      {route: 'launch/:launchId', name: 'launch', moduleId: PLATFORM.moduleName('pages/launch')},
      {route: 'cart', name: 'cart', moduleId: PLATFORM.moduleName('pages/cart')},
      {route: 'profile', name: 'profile', moduleId: PLATFORM.moduleName('pages/profile')},
    ]);
  }
}
