import React from 'react';

export default function DrumPads(props) {
  return (
    <button className='drum-pad' value={props.value} id={props.id} onClick={props.onClick} >
      {props.value}
      <audio className='clip' src={props.nestedAudioSrc} id={props.nestedAudioId}></audio>
    </button>
  );
}