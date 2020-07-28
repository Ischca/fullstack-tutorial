import gql from 'graphql-tag';

import ApolloClient from 'apollo-client';
import * as LoginTypes from './__generated__/login';
import {client} from "../app";

export const LOGIN_USER = gql`
  mutation Login($email: String!) {
    login(email: $email)
  }
`;

export class Login {
  loading;
  error;

  login() {
    this.loading = true;
    client.mutate({
      mutation: LOGIN_USER,
    })
      .then(login => {
        localStorage.setItem('token', login as string);
        client.writeData({data: {isLoggedIn: true}});
      });
  }
}
