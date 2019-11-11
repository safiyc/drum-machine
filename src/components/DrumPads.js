import React from 'react';

export default function DrumPads(props) {
  return (
    <button className={`drum-pad ${props.value}`} value={props.value} id={props.id} onClick={props.onClick} >
      <style jsx='true' global='true'>{`
        .drum-pad {
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
        }
        .drum-pad:hover, .drum-pad-keyed {
          color: yellow;
        }
        .Q {
          bottom: 68%;
          left: 12%;
          font-size: calc(3vw + 3vh + 1vmin);
        }
        .W {
          bottom: 90%;
          left: 28%;
          font-size: calc(2vw + 2vh + 1vmin);
        }
        .E {
          bottom: 64%;
          left: 41%;
          font-size: calc(2vw + 2vh + 1vmin);
          transform: skew(-40deg, 15deg);
        }
        .A {
          bottom: 46%;
          left: 35%;
          font-size: calc(3.5vw + 3.5vh + 1vmin);
        }
        .S {
          bottom: 73%;
          left: 65%;
          font-size: calc(1.5vw + 1.5vh + 1vmin);
        }
        .D {
          bottom: 48%;
          left: 65%;
          font-size: calc(1.6vw + 1.6vh + 1vmin);
          transform: skew(-65deg, 20deg);
        }
        .Z {
          bottom: 39%;
          left: 80%;
          font-size: calc(2.3vw + 2.3vh + 1vmin);
          transform: skew(-60deg, 15deg);
        }
        .X {
          bottom: 83%;
          left: 78%;
          font-size: calc(2vw + 2vh + 1vmin);
          transform: rotate(-15deg);
        }
        .C {
          bottom: 20%;
          left: 45%;
          font-size: calc(6vw + 6vh + 1vmin);
        }
      `}</style>{props.value}
      <audio className='clip' src={props.nestedAudioSrc} id={props.nestedAudioId}></audio>
    </button>
  );
}