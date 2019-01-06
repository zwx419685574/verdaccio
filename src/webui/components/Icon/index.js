/**
 * @prettier
 * @flow
 */

import React from 'react';
import type { Node } from 'react';
import capitalize from 'lodash/capitalize';

import { Svg, Img, ImgWrapper } from './styles';
import { IProps, IIconsMap } from './types';

import brazil from './img/brazil.svg';
import china from './img/china.svg';
import india from './img/india.svg';
import nicaragua from './img/nicaragua.svg';
import pakistan from './img/pakistan.svg';
import austria from './img/austria.svg';
import spain from './img/spain.svg';
import earth from './img/earth.svg';
import verdaccio from './img/verdaccio.svg';
import license from './img/license.svg';
import time from './img/time.svg';

export const Icons: $Shape<IIconsMap> = {
  // flags
  brazil,
  spain,
  china,
  nicaragua,
  pakistan,
  india,
  austria,
  earth,
  verdaccio,
  license,
  time,
};

const Icon = ({ className, name, size = 'sm', img = false, pointer = false, modifiers, onClick }: IProps): Node => {
  const title = capitalize(name);
  return img ? (
    <ImgWrapper className={className} modifiers={modifiers} onClick={onClick} pointer={pointer} size={size} title={title}>
      <Img alt={title} src={Icons[name]} />
    </ImgWrapper>
  ) : (
    <Svg className={className} modifiers={modifiers} onClick={onClick} pointer={pointer} size={size}>
      <title>{title}</title>
      <use xlinkHref={`${Icons[name]}#${name}`} />
    </Svg>
  );
};

export default Icon;
