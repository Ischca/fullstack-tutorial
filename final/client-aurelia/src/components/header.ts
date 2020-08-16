import {size} from 'polished';

import {unit, colors} from '../styles';
import dog1 from '../assets/images/dog-1.png';
import dog2 from '../assets/images/dog-2.png';
import dog3 from '../assets/images/dog-3.png';
import {css} from "emotion";
import {customElement} from "aurelia-framework";

@customElement('styled-header')
export class Header {

  image?: string | any;
  children = 'Space Explorer';

  email;
  avatar;

  bind() {
    this.email = atob(localStorage.getItem('token') as string);
    this.avatar = this.image || this.pickAvatarByEmail(this.email);
  }

  max = 25; // 25 letters in the alphabet
  offset = 97; // letter A's charcode is 97
  avatars = [dog1, dog2, dog3];
  maxIndex = this.avatars.length - 1;

  pickAvatarByEmail(email: string) {
    const charCode = email.toLowerCase().charCodeAt(0) - this.offset;
    const percentile = Math.max(0, Math.min(this.max, charCode)) / this.max;
    return this.avatars[Math.round(this.maxIndex * percentile)];
  }

  /**
   * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
   */

  containerClassName = css({
    display: 'flex',
    alignItems: 'center',
    marginBottom: unit * 4.5,
  });

  imageClassName = css(size(134), {
    marginRight: unit * 2.5,
    borderRadius: !this.image ? '50%' : '0%',
  });

  subheadingClassName = css({
    marginTop: unit / 2,
    color: colors.textSecondary,
  });

}
