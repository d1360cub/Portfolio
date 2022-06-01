import React from 'react';
import Seo from './Seo';
import { Global } from '@emotion/react';
import { css, Themed } from 'theme-ui';

const Layout = ({ children, className }) => (
  <Themed.root>
    <Global
      styles={css({
        '*': {
          boxSizing: `inherit`,
          '&:before': {
            boxSizing: `inherit`,
          },
          '&:after': {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `18px`,
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`,
          WebkitFontSmoothing: `antialiased`,
          MozOsxFontSmoothing: `grayscale`,
        },
        '::selection': {
          backgroundColor: `primary`,
          color: `white`,
        },
      })}
    />
    <Seo />
    <main className={className}>{children}</main>
  </Themed.root>
);

export default Layout;
