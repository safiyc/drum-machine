import React from 'react';
// import * as S from './styling/drumMachineStyling';

export default function DrumPads(props) {
  return (
    <button className={`drum-pad ${props.value}`} value={props.value} id={props.id} onClick={props.onClick} >
      <style jsx='true'>{`
        .drum-pad {
          position: absolute;
          z-index: 100;
          // background-color: rgba(0,255,0,.2);
          // border: 1px dotted black;
          background-color: initial;
          border: none;
        }

        .drum-pad:hover {
          background-color: rgba(0,255,0,.2);
          border: 1px dotted black;
        }
        .Q {
          height: 8%;
          width: 18.5%;
          bottom: 65.9%;
          left: 16%;
        }
        .W {
          height: 9%;
          width: 19%;
          bottom: 86.6%;
          left: 29.2%;
        }
        .E {
          height: 13%;
          width: 16%;
          bottom: 62.4%;
          left: 39.25%;
        }
        .A {
          height: 11.5%;
          width: 21%;
          bottom: 47%;
          left: 33%;
        }
        .S {
          height: 11%;
          width: 22%;
          bottom: 68.2%;
          left: 55.5%;
        }
        .D {
          height: 12%;
          width: 19.5%;
          bottom: 47.6%;
          left: 61%;
        }
        .Z {
          height: 13%;
          width: 21%;
          bottom: 39.5%;
          left: 72.75%;
          z-index: 105;
        }
        .X {
          height: 9.5%;
          width: 20%;
          bottom: 79.2%;
          left: 76.75%;
        }
        .C {
          height: 28%;
          width: 11%;
          bottom: 14%;
          left: 49%;
        }
      `}</style>
      {props.value}
      <audio className='clip' src={props.nestedAudioSrc} id={props.nestedAudioId}></audio>
    </button>
  );
}