import gql from 'graphql-tag';

import {LAUNCH_TILE_DATA} from '../pages/launches';
import * as LaunchDetailTypes from '../pages/__generated__/LaunchDetails';
import {client} from "../app";
import {bindable} from "aurelia-framework";

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
  @bindable
  launchId;

  activate() {
    this.loading = true;
    return client.query({
      query: GET_LAUNCH,
      variables: {launchId: this.launchId}
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
