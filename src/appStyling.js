import styled from 'styled-components';

// this file - styles for Header, Footer,...

// #region Header
export const Heading = styled.div`
  position: sticky;
  top: 0;
  background-color: black;
  height: 75px;
  padding-top: 8px;
  padding-bottom: 8px;
  z-index: 500;

`;

export const ProjectName = styled.h1`
  background-color: indigo;
  text-align: center;
  font-family: 'Fugaz One', cursive;
  font-size: 40px;
  margin: 0;
`;

export const Curtain = styled.div`
  background-color: black;
  height: calc(100vh - 142px);  /* 100vh - (heading + footer - 8px padding) */
  position: relative; /* need for z-index */
  z-index: 400;

  & p {
    text-align: center;
    color: white;
    font-size: 4rem;
    margin-top: 0;
    animation: color-beat 1.5s infinite;
  }

  @keyframes color-beat {
    0% { color: white; padding-top: 0; }
    50% { color: indigo; }
    55% { color: white; }
    100% { color: indigo; padding-top: 3px; }
  }
`;
// #endregion

// #region Footer
export const Footer = styled.footer`position: sticky;
  bottom: 0;
  background-color: black;
  padding-top: 8px;
  padding-bottom: 8px;
  height: 75px;
  z-index: 500;
`;

export const FooterLink = styled.a`
  color: black;
  text-align: center;
  font-size: 1.25rem;
  text-decoration: none;
  background-color: indigo;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding-top: 14px;  /* to vert center text */

  &:hover {
    text-decoration: underline;
  }
`;
// endregion