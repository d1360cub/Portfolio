/** @jsx jsx */
import { jsx } from 'theme-ui';

import Inner from '../elements/inner';
import Content from '../elements/content';
import ShapesHero from './shapes/hero';

import Hero from '../sections/hero.mdx';

const Hero = ({ offset }) => (
  <div>
    <ShapesHero offset={offset} />
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
      <Inner>{Hero}</Inner>
    </Content>
  </div>
);

export default Hero;
