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

export const CrowdOverlay = styled.div`
  position: absolute;
  top: 0;
  height: 40%;
  width: 100%;
  z-index: 20;
  background: initial;
  background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,.8) 16%,rgba(0,0,0,0.2) 90%,rgba(0,0,0,0) 100%);
`;

export const SoundDisplay = styled.div`
  position: fixed;
  top: 75px;
  height: 40%;
  width: 100%;

  z-index: 30;
  pointer-events: none;

  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    color: indigo;
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const StageAreaContainer = styled.div`
  /* position: relative; */
  /* border: 2px solid white; */
  /* background: rgba(255,255,255,.5); */

  position: absolute;
  bottom: 0;
`;

export const DrumImg = styled.img`
  max-width: 100%;
  /* border: 2px dotted red; */
  position: relative;  /* need for z-index */
  z-index: 15;
  pointer-events: none;
`;

export const DrumStage = styled.div`
  position: absolute;
  bottom: 0;
  height: 38%;
  width: 100%;
  z-index: 1;
  background-image: url(${imageStage});
  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.5), inset 0 8px 0 0 black, inset 0 13px 5px 0 rgba(0,0,0,.5);
`;

export const DrumStageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  height: 30%;
  width: 100%;
  z-index: 20;
  background: initial;
  background: linear-gradient(0deg, rgba(0,0,0,.95) 0%,rgba(0,0,0,.85) 15%, rgba(0,0,0,.65) 40%, rgba(255,255,255,0) 100%);
`;

// #region drumpads will delete
// export const DrumPads = styled.button`
//   position: absolute;
//   z-index: 100;
//   background-color: rgba(255,0,0,.25);
//   border: 1px dotted red;

//   & .Q {
//     height: 8%;
//     width: 18.5%;
//     bottom: 65.9%;
//     left: 16%;
//   }

//   .W {
//     height: 9%;
//     width: 19%;
//     bottom: 86.6%;
//     left: 29.2%;
//   }

//   .E {
//     height: 9%;
//     width: 19%;
//     bottom: 86.6%;
//     left: 29.2%;
//   }

//   .A {
//     height: 9%;
//     width: 19%;
//     bottom: 86.6%;
//     left: 29.2%;
//   }

//   .S {
//     height: 9%;
//     width: 19%;
//     bottom: 86.6%;
//     left: 29.2%;
//   }

//   .D {
//     height: 9%;
//     width: 19%;
//     bottom: 86.6%;
//     left: 29.2%;
//   }

//   .Z {
//     height: 9%;
//     width: 19%;
//     bottom: 86.6%;
//     left: 29.2%;
//   }

//   .X {
//     height: 9%;
//     width: 19%;
//     bottom: 86.6%;
//     left: 29.2%;
//   }

//   .C {
//     height: 9%;
//     width: 19%;
//     bottom: 86.6%;
//     left: 29.2%;
//   }
// `;

// export const LocQ = styled(DrumPads)`
//   height: 8%;
//     width: 18.5%;
//     bottom: 65.9%;
//     left: 16%;
// `;

// export const LocW = styled(DrumPads)`
//       height: 9%;
//     width: 19%;
//     bottom: 86.6%;
//     left: 29.2%;
// `;

// export const LocE = styled(DrumPads)`
//   height: 13%;
//     width: 16%;
//     bottom: 62.4%;
//     left: 39.25%;
// `;

// export const LocA = styled(DrumPads)`
//   height: 11.5%;
//     width: 21%;
//     bottom: 47%;
//     left: 33%;
// `;

// export const LocS = styled(DrumPads)`
//   height: 11%;
//     width: 22%;
//     bottom: 68.2%;
//     left: 55.5%;
// `;

// export const LocD = styled(DrumPads)`
//   height: 12%;
//     width: 19.5%;
//     bottom: 47.6%;
//     left: 61%;
// `;

// export const LocZ = styled(DrumPads)`
//       height: 13%;
//     width: 21%;
//     bottom: 39.5%;
//     left: 72.75%;
//     z-index: 105;
// `;

// export const LocX = styled(DrumPads)`
//   height: 9.5%;
//     width: 20%;
//     bottom: 79.2%;
//     left: 76.75%;
// `;

// export const LocC = styled(DrumPads)`
//   height: 28%;
//     width: 11%;
//     bottom: 14%;
//     left: 49%;
// `;
// #endregion

// export { imageDrum };