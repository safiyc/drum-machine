import React from 'react';

export default function SoundDisplay(props) {
  return (
    <div id='display'>
      <style jsx>{`
        #display {
          height: 50px;
          background-color: yellow;
        }
      `}</style>
      {props.showDisplay}
    </div>
  );
}