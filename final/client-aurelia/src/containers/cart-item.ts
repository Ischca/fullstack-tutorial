import gql from 'graphql-tag';

import {LaunchTile} from '../components/launch-tile';
import {LAUNCH_TILE_DATA} from '../pages/launches';
import * as LaunchDetailTypes from '../pages/__generated__/LaunchDetails';
import {client} from "../app";

export const GET_LAUNCH = gql`
  query GetLaunch($launchId: ID!) {
    launch(id: $launchId) {
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`;

interface CartItemProps extends LaunchDetailTypes.LaunchDetailsVariables {
}

export class CartItem {
  data: LaunchDetailTypes.LaunchDetails;
  loading;
  error;

  activate(model: CartItemProps) {
    this.loading = true;
    client.query({
      query: GET_LAUNCH,
      variables: {id: model.launchId}
    })
      .then(result => result.data as LaunchDetailTypes.LaunchDetails)
      .then(data => {
        this.data = data;
      })
      .then(() => this.data.launch)
      .catch(e => this.error = e)
      .finally(() => this.loading = false);
  }
}
