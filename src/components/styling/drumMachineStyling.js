import styled, { keyframes } from 'styled-components';
import imageCrowd from '../../asset/crowd1.jpg';
import imageStage from '../../asset/stage.jpg';

import above from '../../util/breakpoints';
import mobileHeight from '../../util/cssVariables';

export const ContentSection = styled.div`
  position: relative;
  height: 90vh;
  height: calc((${mobileHeight}, 1vh) * 100);

  ${above.med`
    max-width: 900px;
    margin: 0 auto;
    height: 90vh;
  `};
`;

export const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
  background: initial;
  background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,.5) 5%, rgba(255,255,255,.35) 40%,rgba(255,255,255,0.2) 60%,rgba(0,0,0,0) 90%);

  pointer-events: none;
`;

export const CrowdImg = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: 900px;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${imageCrowd});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
`;

export const CrowdOverlay = styled(ContentOverlay)`
  z-index: 5;
  background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,.35) 30%,rgba(255,255,255,0.3) 60%,rgba(0,0,0,.5) 90%);

  pointer-events: none;
`;

export const SoundDisplay = styled.div`
  position: fixed;
  top: 75px;
  left: 0;
  right: 0;
  height: 40%;
  width: 100%;

  z-index: 16;
  pointer-events: none;

  display: flex;
  justify-content: center;
  align-items: top;

  & p {
    color: white;
    text-shadow: 0 0 3px black; 
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const StageAreaContainer = styled.div`
  position: absolute;
  bottom: 0;

  ${above.med`
    width: 80vw;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    
    bottom: -50px;
    max-width: 700px;
  `}
`;

export const DrumsetContainer = styled.div`
  width: 100%;
  overflow: hidden;

  ${above.med`
    width: calc(100% - 50px);
    margin: 0 auto;
  `};
`;

const toggleSilhouette = () => keyframes`
  0% {
    filter: brightness(0);
    transform: translateY(250px);
  }
  20% {
    filter: brightness(0);
  }
  30% {
    filter: brightness(.5);
    transform: translateY(200px);
  }
  31% {
    filter: brightness(0);
  }
  40% {
    transform: translateY(0px);
  }
  100% {
    filter: brightness(1);
  }
`;
export const DrumImg = styled.img`
  max-width: 100%;
  position: relative;  /* need for z-index */
  z-index: 15;

  animation: ${toggleSilhouette()} ease-in 5s;  /* works with DrumBtn animation */
`;

export const Stage = styled.div`
  position: absolute;
  bottom: 0;
  height: 38%;
  width: 100%;
  z-index: 10;
  background-image: url(${imageStage});
  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.5), inset 0 8px 0 0 black, inset 0 13px 5px 0 rgba(0,0,0,.5);

  ${above.med`
    border-top-right-radius: 200px;  /* same val as StageOverlay */
    border-top-left-radius: 200px;
    border-right: 5px solid black;
    border-left: 5px solid black;
    
    height: 33%;
  `};
`;

export const StageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  height: 30%;
  width: 100%;
  z-index: 20;
  background: initial;
  background: linear-gradient(0deg, rgba(0,0,0,.95) 0%,rgba(0,0,0,.85) 15%, rgba(0,0,0,.65) 40%, rgba(255,255,255,0) 100%);
  pointer-events: none;

  ${above.med`
    background: linear-gradient(0deg, rgba(0,0,0,.95) 0%,rgba(0,0,0,.85) 15%, rgba(0,0,0,.65) 40%, rgba(255,255,255,0) 100%);
    border-top-left-radius: 200px;  /* same val as Stage */
    border-top-right-radius: 200px;

    height: 33%;  /* same as Stage val to keep radius expand ratio */
  `};
`;