import {MenuItem} from '../components/menu-item';
import {ReactComponent as ExitIcon} from '../../../client/src/assets/icons/exit.svg';
import {client} from "../app";
import {css} from "emotion";

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
