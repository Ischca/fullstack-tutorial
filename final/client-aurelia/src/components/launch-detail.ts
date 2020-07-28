import {unit} from '../styles';
import {LaunchDetails_launch} from '../pages/__generated__/LaunchDetails';
import {css} from "emotion";
import {LaunchTile} from "./launch-tile";
import {autoinject} from 'aurelia-framework';

type LaunchDetailProps = Partial<LaunchDetails_launch>

@autoinject
export class LaunchDetail {
  id;
  site;
  rocket;

  constructor(private launchTile: LaunchTile) {
  }

  activate(model: LaunchDetailProps) {
    this.id = model.id;
    this.site = model.site;
    this.rocket = model.rocket;
  }

  /**
   * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
   */

  styledCardClassName = css(this.launchTile.cardClassName, {
    height: 365,
    marginBottom: unit * 4,
  });
}
