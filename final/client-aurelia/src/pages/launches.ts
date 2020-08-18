import gql from 'graphql-tag';

import {RouteComponentProps} from '@reach/router/index';
import * as GetLaunchListTypes from './__generated__/GetLaunchList';
import {client} from "../app";
import {ObservableQuery} from "apollo-client";

export const LAUNCH_TILE_DATA = gql`
  fragment LaunchTile on Launch {
    __typename
    id
    isBooked
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
`;

export const GET_LAUNCHES = gql`
  query GetLaunchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

interface LaunchesProps extends RouteComponentProps {
}

export class Launches {
  data;
  loading;
  error;
  query: ObservableQuery<GetLaunchListTypes.GetLaunchList, GetLaunchListTypes.GetLaunchListVariables>;

  activate() {
    this.loading = true;
    this.query = client.watchQuery({
      query: GET_LAUNCHES
    });
    this.query.result()
      .then(result => result.data)
      .then(data => this.data = data)
      .catch(e => this.error = e)
      .finally(() => this.loading = false);
  }

  click() {
    this.loading = true;
    this.query.fetchMore({
      variables: {
        after: this.data.launches.cursor,
      },
      updateQuery: (prev, {fetchMoreResult, ...rest}) => {
        if (!fetchMoreResult) return prev;
        return {
          ...fetchMoreResult,
          launches: {
            ...fetchMoreResult.launches,
            launches: [
              ...prev.launches.launches,
              ...fetchMoreResult.launches.launches,
            ],
          },
        };
      },
    })
      .catch(e => this.error = e)
      .finally(() => this.loading = false);
  }
}
