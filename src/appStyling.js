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
  z-index: 100;

`;

export const ProjectName = styled.h1`
  background-color: indigo;
  text-align: center;
  font-family: 'Fugaz One', cursive;
  font-size: 40px;
  margin: 0;
`;

export const Subheading = styled.div`
  background-color: white;
  color: black;
  height: calc(100vh - 150px);  /* 100vh - (heading + footer) */
  text-align: center;
  font-size: 4rem;
  position: relative;
  z-index: 50;
`;
// #endregion

// #region Footer
export const Footer = styled.footer`position: sticky;
  bottom: 0;
  background-color: black;
  padding-top: 8px;
  padding-bottom: 8px;
  height: 75px;
  z-index: 100;
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