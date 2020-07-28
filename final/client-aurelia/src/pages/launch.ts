import gql from 'graphql-tag';

import {LAUNCH_TILE_DATA} from './launches';
import {ActionButton} from '../containers';
import {RouteComponentProps} from '@reach/router';
import * as LaunchDetailsTypes from './__generated__/LaunchDetails';
import {client} from "../app";

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

interface LaunchProps extends RouteComponentProps {
  launchId?: any;
}

export class Launch {
  data;
  loading;
  error;

  activate(model: LaunchProps) {
    client.query({
      query: GET_LAUNCH_DETAILS,
      variables: {id: model.launchId}
    });
  }
}
