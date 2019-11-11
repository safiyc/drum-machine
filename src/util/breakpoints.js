import { css } from 'styled-components';

const size = {
  small: 600,
  med: 770,
  large: 992
};

// Mobil first, prefer the "above" breakpoint function
const breakpoints = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default breakpoints;