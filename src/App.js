import React from 'react';

import soundTest from './asset/animals_lion_growl_001.mp3';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleClick(e) {
    this.setState({
      display: e.target.id
    });

    const audio = document.querySelector(`[value="${e.target.value}"] audio`);
    console.log(audio);
    audio.currentTime = 0;
    audio.play();

    // console.log(e);
  }

  handleKeyPress(e) {
    const el = document.querySelector(`[value="${e.keyCode}"]`);
    if (el === null) {
      return;
    } else {
      this.setState({
        display: el.getAttribute('id')
      });

      const audio = el.querySelector(`audio`);
      console.log(audio);
      audio.currentTime = 0;
      audio.play();
    }
  }

  render() {
    return (
      <div>
        <div id='drum-machine'>
          <div id='display' style={{ height: '50px', backgroundColor: 'yellow' }}>
            {this.state.display}
          </div>

          <div className='pads'>
            <button className='drum-pad' value='81' id='aQ' onClick={this.handleClick}>
              <audio src={soundTest} className='clip' id='Q'></audio>
              Q
            </button>
            <button className='drum-pad' value='87' id='aW' onClick={this.handleClick}>
              <audio src={soundTest} className='clip' id='W'></audio>
              W
            </button>
            <button className='drum-pad' value='69' id='aE' onClick={this.handleClick}>
              <audio src={soundTest} className='clip' id='E'></audio>
              E
            </button>
            <button className='drum-pad' value='65' id='aA' onClick={this.handleClick}>
              <audio src={soundTest} className='clip' id='A'></audio>
              A
            </button>
            <button className='drum-pad' value='83' id='aS' onClick={this.handleClick}>
              <audio src={soundTest} className='clip' id='S'></audio>
              S
            </button>
            <button className='drum-pad' value='68' id='aD' onClick={this.handleClick}>
              <audio src={soundTest} className='clip' id='D'></audio>
              D
            </button>
            <button className='drum-pad' value='90' id='aZ' onClick={this.handleClick}>
              <audio src={soundTest} className='clip' id='Z'></audio>
              Z
            </button>
            <button className='drum-pad' value='88' id='aX' onClick={this.handleClick}>
              <audio src={soundTest} className='clip' id='X'></audio>
              X
            </button>
            <button className='drum-pad' value='67' id='aC' onClick={this.handleClick}>
              <audio src={soundTest} className='clip' id='C'></audio>
              C
            </button>
          </div>
        </div>
      </div>
    );
  }
}
