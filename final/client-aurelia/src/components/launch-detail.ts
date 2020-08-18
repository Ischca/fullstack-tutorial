import {unit} from '../styles';
import {LaunchDetails_launch} from '../pages/__generated__/LaunchDetails';
import {css} from "emotion";
import {LaunchTile} from "./launch-tile";
import {autoinject, bindable} from 'aurelia-framework';

type LaunchDetailProps = Partial<LaunchDetails_launch>

@autoinject
export class LaunchDetail {
  @bindable
  launch: LaunchDetailProps

  constructor(private launchTile: LaunchTile) {
  }

  activate() {
  }

  /**
   * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
   */

  styledCardClassName = css(this.launchTile.cardClassName, {
    height: 365,
    marginBottom: unit * 4,
  });
}
