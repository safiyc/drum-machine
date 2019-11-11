import styled from 'styled-components';

const DrumBtn = styled.button`
  /* this component replaces className 'drum-pad' */
  position: absolute;
  z-index: 17;
  font-weight: 800;
  color: rgba(255,165,0,.85);
  text-shadow: 0 0 2px black;
  background-color: initial;
  border: none;
  outline: none;

  padding: 0;
  height: fit-content;
  width: fit-content;

  animation: text-fade 4s ease-in;
  @keyframes text-fade {
    0% { 
      color: black;
    }
    100% {
      color: rgba(255,165,0,.85);
    }
  }

  &:hover {
    color: yellow;
  }

  &.Q {
    bottom: 67%;
    left: 12%;
    font-size: calc(3vw + 3vh + 1vmin);
  }
  &.W {
    bottom: 90%;
    left: 28%;
    font-size: calc(2vw + 2vh + 1vmin);
  }
  &.E {
    bottom: 63%;
    left: 42%;
    font-size: calc(2vw + 2vh + 1vmin);
    transform: skew(-40deg, 10deg);
  }
  &.A {
    bottom: 45%;
    left: 36%;
    font-size: calc(3vw + 3vh + 1vmin);
  }
  &.S {
    bottom: 73%;
    left: 65%;
    font-size: calc(2vw + 2vh + 1vmin);
  }
  &.D {
    bottom: 48%;
    left: 68%;
    font-size: calc(1.6vw + 1.6vh + 1vmin);
    transform: skew(-65deg, 20deg);
  }
  &.Z {
    bottom: 39%;
    left: 80%;
    font-size: calc(2.3vw + 2.3vh + 1vmin);
    transform: skew(-60deg, 15deg);
  }
  &.X {
    bottom: 83%;
    left: 78%;
    font-size: calc(1.5vw + 1.5vh + 1vmin);
    transform: rotate(-15deg);
  }
  &.C {
    bottom: 20%;
    left: 45%;
    font-size: calc(6.5vw + 6.5vh + 1vmin);
  }
  @media (min-width: 1000px) {
    &.Q {
      bottom: 66%;
      font-size: 5rem;
    }
    &.W {
      font-size: 4rem;
    }
    &.E {
      font-size: 2.8rem;
    }
    &.A {
      bottom: 43%;
      font-size: 5rem;
    }
    &.S {
      font-size: 3rem;
    }
    &.D {
      font-size: 2rem;
      left: 66%;
    }
    &.Z {
      font-size: 2.6rem;
      left: 78%;
    }
    &.X {
      font-size: 2rem;
    }
    &.C {
      font-size: 6rem;
    }
  }
`;

export default DrumBtn;