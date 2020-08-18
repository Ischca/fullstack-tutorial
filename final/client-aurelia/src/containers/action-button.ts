import gql from 'graphql-tag';

import {GET_LAUNCH_DETAILS} from '../pages/launch';
import * as LaunchDetailTypes from '../pages/__generated__/LaunchDetails';
import {client} from "../app";
import {bindable} from "aurelia-framework";

// export all queries used in this file for testing
export {GET_LAUNCH_DETAILS};

export const TOGGLE_CART = gql`
  mutation addOrRemoveFromCart($launchId: ID!) {
    addOrRemoveFromCart(id: $launchId) @client
  }
`;

export const CANCEL_TRIP = gql`
  mutation cancel($launchId: ID!) {
    cancelTrip(launchId: $launchId) {
      success
      message
      launches {
        id
        isBooked
      }
    }
  }
`;

interface ActionButtonProps extends Partial<LaunchDetailTypes.LaunchDetails_launch> {
}

export class ActionButton {
  loading: boolean;
  error: boolean;
  @bindable
  props: ActionButtonProps;

  activate() {
  }

  click() {
    this.loading = true;
    return client.mutate({
        mutation: this.props.isBooked ? CANCEL_TRIP : TOGGLE_CART,
        variables: {launchId: this.props.id},
        refetchQueries: [
          {
            query: GET_LAUNCH_DETAILS,
            variables: {launchId: this.props.id},
          },
        ]
      }
    )
      .catch(e => this.error = e)
      .finally(() => this.loading = false);
  }
}
