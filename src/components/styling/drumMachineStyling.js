import styled from 'styled-components';
import imageCrowd from '../../asset/crowd.jpg';
import imageStage from '../../asset/stage.jpg';

export const ContentSection = styled.div`
  background-image: url(${ imageCrowd});
  height: 90vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
`;

export const SoundDisplay = styled.div`
  position: fixed;
  top: 75px;
  height: 40%;
  width: 100%;
  background-color: yellow;
  opacity: .5;

  z-index: 20;
`;

export const DrumImg = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 5;

  border-bottom: 1px solid black;
`;

export const DrumStage = styled.div`
  position: absolute;
  bottom: 0;
  height: 20%;
  width: 100%;
  z-index: 1;
  /* background-color: black; */
  background-image: url(${imageStage});
  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.5), inset 0 8px 0 0 black, inset 0 13px 5px 0 rgba(0,0,0,.5);
`;

export const DrumStageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  height: 20%;
  width: 100%;
  z-index: 10;
  background: initial;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%,rgba(0,0,0,.95) 15%, rgba(0,0,0,.75) 40%, rgba(255,255,255,0) 100%);
`;

export const ltrLocationTest = styled.div`
  position: absolute;
  border: 1px dotted red;
  height: 10%;
  width: 10%;
  bottom: 120px;
  left: 40px;
  z-index: 5;
  margin: 0 auto;
`;


// export { imageDrum };