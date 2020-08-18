import gql from 'graphql-tag';

import {LAUNCH_TILE_DATA} from './launches';
import {client} from "../app";
import {containerless} from "aurelia-framework";

export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      isInCart @client
      site
      rocket {
        type
      }
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`;

interface LaunchProps {
  launchId?: any;
}

@containerless
export class Launch {
  data;
  loading;
  error;

  activate(model: LaunchProps) {
    this.loading = true;
    return client.query({
      query: GET_LAUNCH_DETAILS,
      variables: {launchId: model.launchId}
    })
      .then(result => {
        this.data = result.data;
      })
      .catch(e => {
        this.error = e;
        console.error(e)
      })
      .finally(() => this.loading = false);
  }
}
