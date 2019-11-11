import React from 'react';
import DrumBtn from './styling/drumpadsStyling';

export default function DrumPads(props) {
  return (
    <DrumBtn className={`drum-pad ${props.value}`} value={props.value} id={props.id} onClick={props.onClick}>
      {props.value}
      <audio className='clip' src={props.nestedAudioSrc} id={props.nestedAudioId}></audio>
    </DrumBtn>
  );
}