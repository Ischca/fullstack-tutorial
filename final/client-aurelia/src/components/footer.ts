import {colors, unit} from '../styles';
import {css} from "emotion";

export class Footer {
  /**
   * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
   */

  containerClassName = css`
    flexShrink: 0,
    marginTop: 'auto',
    backgroundColor: 'white',
    color: ${colors.textSecondary},
    position: 'sticky',
    bottom: 0,
  `;

  innerContainerClassName = css`
    display: 'flex',
    alignItems: 'center',
    maxWidth: 460,
    padding: ${unit * 2.5},
    margin: '0 auto',
  `;
}
