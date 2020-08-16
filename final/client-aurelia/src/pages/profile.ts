import gql from 'graphql-tag';

import {LAUNCH_TILE_DATA} from './launches';
import {RouteComponentProps} from '@reach/router/index';
import {client} from "../app";

export const GET_MY_TRIPS = gql`
  query GetMyTrips {
    me {
      id
      email
      trips {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

interface ProfileProps extends RouteComponentProps {
}

export class Profile {
  data;
  loading;
  error;

  activate(model: ProfileProps) {
    client.query({
      query: GET_MY_TRIPS,
      fetchPolicy: "network-only"
    });
  }
}
