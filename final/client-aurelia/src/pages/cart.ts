import gql from 'graphql-tag';

import {RouteComponentProps} from '@reach/router/index';
import {GetCartItems} from './__generated__/GetCartItems';
import {client} from "../app";

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

interface CartProps extends RouteComponentProps {
}

export class Cart {
  data: GetCartItems;
  loading;
  error;

  activate(model: CartProps) {
    this.loading = true;
    client.query({query: GET_CART_ITEMS})
      .then(result => result.data)
      .then(data => this.data = data)
      .catch(e => this.error = e)
      .finally(() => this.loading = false);
  }
}
