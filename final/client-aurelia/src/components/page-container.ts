import {unit, colors} from '../styles';
import {css} from "emotion";

export class PageContainer {
  props: any;
  /**
   * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
   */

  barClassName = css({
    flexShrink: 0,
    height: 12,
    backgroundColor: colors.primary,
  });

  containerClassName = css({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
    maxWidth: 600,
    margin: '0 auto',
    padding: unit * 3,
    paddingBottom: unit * 5,
  });
}
