import gql from 'graphql-tag';

import {GetCartItems} from './__generated__/GetCartItems';
import {client} from "../app";

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

export class Cart {
  data: GetCartItems;
  loading;
  error;

  activate() {
    this.loading = true;
    return client.query({query: GET_CART_ITEMS})
      .then(result => result.data)
      .then(data => this.data = data)
      .catch(e => this.error = e)
      .finally(() => this.loading = false);
  }
}
