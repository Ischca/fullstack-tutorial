import {colors, unit} from '../styles';
import {css} from "emotion";
import {containerless, bindable} from "aurelia-framework";

@containerless
export class MenuItem {
  @bindable
  to;

  menuItemClassName = css({
    flexGrow: 1,
    width: 0,
    fontFamily: 'inherit',
    fontSize: 20,
    color: 'inherit',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    textAlign: 'center',
    svg: {
      display: 'block',
      width: 60,
      margin: `0 auto ${unit}px`,
      fill: colors.secondary,
    },
  });

  css = css(this.menuItemClassName, {
    textDecoration: 'none',
  });
}
