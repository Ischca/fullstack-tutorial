import {size} from 'polished';

import space from '../assets/images/space.jpg';
import {colors, unit} from '../styles';
import * as LoginTypes from '../pages/__generated__/login';
import {css} from "emotion";

interface LoginFormProps {
  login: (a: { variables: LoginTypes.loginVariables }) => void;
}

interface LoginFormState {
  email: string;
}

export default class LoginForm implements LoginFormProps, LoginFormState {
  email: string;
  login: (a: { variables: LoginTypes.loginVariables; }) => void;

  state = {email: ''};

  onChange(event: Event) {
    const email = (event.target as HTMLInputElement).value;
    this.state.email = email;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.login({variables: {email: this.state.email}});
  };

  /**
   * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
   */

  containerClassname = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: unit * 6,
    color: 'white',
    backgroundColor: colors.primary,
    backgroundImage: `url(${space})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  });

  svgClassName = css({
    display: 'block',
    fill: 'currentColor',
  });

  headerClassName = css(this.svgClassName, {
    width: '100%',
    marginBottom: unit * 5,
    padding: unit * 2.5,
    position: 'relative',
  });

  styledLogo = css(size(56), {
    display: 'block',
    margin: '0 auto',
    position: 'relative',
  });

  styledCurve = css(size('100%'), {
    fill: colors.primary,
    position: 'absolute',
    top: 0,
    left: 0,
  });

  headingClassName = css({
    margin: `${unit * 3}px 0 ${unit * 6}px`,
  });

  styledRocket = css(this.svgClassName, {
    width: 250,
  });

  styledForm = css({
    width: '100%',
    maxWidth: 406,
    padding: unit * 3.5,
    borderRadius: 3,
    boxShadow: '6px 6px 1px rgba(0, 0, 0, 0.25)',
    color: colors.text,
    backgroundColor: 'white',
  });

  styledInput = css({
    width: '100%',
    marginBottom: unit * 2,
    padding: `${unit * 1.25}px ${unit * 2.5}px`,
    border: `1px solid ${colors.grey}`,
    fontSize: 16,
    outline: 'none',
    ':focus': {
      borderColor: colors.primary,
    },
  });
}
