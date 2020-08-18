import gql from 'graphql-tag';

import {GET_LAUNCH} from './cart-item';
import * as GetCartItemsTypes from '../pages/__generated__/GetCartItems';
import * as BookTripsTypes from './__generated__/BookTrips';
import {client} from "../app";
import {bindable} from "aurelia-framework";

export const BOOK_TRIPS = gql`
  mutation BookTrips($launchIds: [ID]!) {
    bookTrips(launchIds: $launchIds) {
      success
      message
      launches {
        id
        isBooked
      }
    }
  }
`;

interface BookTripsProps extends GetCartItemsTypes.GetCartItems {
}

export class BookTrips {
  bookTrips;
  data: BookTripsTypes.BookTrips;
  @bindable
  props: BookTripsProps;

  activate() {
  }

  click() {
    client.mutate({
      mutation: BOOK_TRIPS,
      variables: {launchIds: this.props.cartItems} as BookTripsTypes.BookTripsVariables,
      refetchQueries: this.props.cartItems.map(launchId => ({
        query: GET_LAUNCH,
        variables: {launchId},
      })),
      update(cache) {
        cache.writeData({data: {cartItems: []}});
      }
    })
      .then(result => result.data as BookTripsTypes.BookTrips)
      .then(data => {
        this.data = data;
        this.bookTrips = data.bookTrips;
      });
  }
}
