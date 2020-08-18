import galaxy from '../assets/images/galaxy.jpg';
import iss from '../assets/images/iss.jpg';
import moon from '../assets/images/moon.jpg';
import {unit} from '../styles';
import * as LaunchTileTypes from '../pages/__generated__/LaunchTile';
import {css} from "emotion";
import {bindable} from "aurelia-framework";

export class LaunchTile {
  @bindable
  launch: LaunchTileTypes.LaunchTile;

  backgrounds = [galaxy, iss, moon];

  activate() {
  }

  getBackgroundImage(id: string) {
    return `url(${this.backgrounds[Number(id) % this.backgrounds.length]})`;
  }

  /**
   * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
   */

  cardClassName = css({
    padding: `${unit * 4}px ${unit * 5}px`,
    borderRadius: 7,
    color: 'white',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  });

  padding = unit * 2;

  styledLinkClassName = css(this.cardClassName, {
    display: 'block',
    height: 193,
    marginTop: this.padding,
    textDecoration: 'none',
    ':not(:last-child)': {
      marginBottom: this.padding * 2,
    },
  });
}
