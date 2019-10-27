import React from 'react';

export default function DrumPads(props) {
  return (
    <div>
      <button className='drum-pad' value='81' id='aQ' onClick={props.clicked}>
        <audio src={props.sound} className='clip' id='Q'></audio>
        Q
      </button>
      <button className='drum-pad' value='87' id='aW' onClick={props.clicked}>
        <audio src={props.sound} className='clip' id='W'></audio>
        W
      </button>
      <button className='drum-pad' value='69' id='aE' onClick={props.clicked}>
        <audio src={props.sound} className='clip' id='E'></audio>
        E
      </button>
      <button className='drum-pad' value='65' id='aA' onClick={props.clicked}>
        <audio src={props.sound} className='clip' id='A'></audio>
        A
      </button>
      <button className='drum-pad' value='83' id='aS' onClick={props.clicked}>
        <audio src={props.sound} className='clip' id='S'></audio>
        S
      </button>
      <button className='drum-pad' value='68' id='aD' onClick={props.clicked}>
        <audio src={props.sound} className='clip' id='D'></audio>
        D
      </button>
      <button className='drum-pad' value='90' id='aZ' onClick={props.clicked}>
        <audio src={props.sound} className='clip' id='Z'></audio>
        Z
      </button>
      <button className='drum-pad' value='88' id='aX' onClick={props.clicked}>
        <audio src={props.sound} className='clip' id='X'></audio>
        X
      </button>
      <button className='drum-pad' value='67' id='aC' onClick={props.clicked}>
        <audio src={props.sound} className='clip' id='C'></audio>
        C
      </button>
    </div>
  );
}