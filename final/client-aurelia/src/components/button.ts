import {css} from "emotion";
import {unit, colors} from '../styles';
import {lighten} from "polished";
import {customElement} from "aurelia-framework";

@customElement('styled-button')
export class Button {

  height = 50;

  className = css({
    display: 'block',
    minWidth: 200,
    height: this.height,
    margin: '0 auto',
    padding: `0 ${unit * 4}px`,
    border: 'none',
    borderRadius: this.height / 2,
    fontFamily: 'inherit',
    fontSize: 18,
    lineHeight: `${this.height}px`,
    fontWeight: 700,
    color: 'white',
    textTransform: 'uppercase',
    backgroundColor: colors.accent,
    cursor: 'pointer',
    outline: 'none',
    ':hover': {
      backgroundColor: lighten(0.1, colors.accent),
    },
    ':active': {
      backgroundColor: lighten(0.2, colors.accent),
    },
  });
}
