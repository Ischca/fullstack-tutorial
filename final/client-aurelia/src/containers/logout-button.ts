import {MenuItem} from '../components/menu-item';
import {client} from "../app";
import {css} from "emotion";
import {autoinject} from "aurelia-framework";
import {containerless} from "aurelia-framework";

@autoinject
@containerless
export class LogoutButton {
  constructor(private menuItem: MenuItem) {
  }

  click() {
    client.writeData({data: {isLoggedIn: false}});
    localStorage.clear();
  }

  /**
   * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
   */

  styledButtonClassName = css(this.menuItem.menuItemClassName, {
    background: 'none',
    border: 'none',
    padding: 0,
  });
}
