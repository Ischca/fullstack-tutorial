import {size} from 'polished';

import {Logo} from '../assets/logo.svg';
import {colors} from '../styles';
import {css, keyframes} from "emotion";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export class Loading {

  logoClassName = css(size(64), {
    display: 'block',
    margin: 'auto',
    fill: colors.grey,
    path: {
      transformOrigin: 'center',
      animation: '${spin} 1s linear infinite',
    },
  });
}
