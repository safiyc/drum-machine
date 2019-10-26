import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      display: e.target.id
    });
  }
  render() {
    return (
      <div>
        <div id='drum-machine'>
          <div id='display' style={{ height: '50px', backgroundColor: 'yellow' }}>
            {this.state.display}
          </div>

          <div>
            <button className='drum-pad' key-code='81' id='aQ' onClick={this.handleClick}>
              <audio src='#' className='clip' id='Q'></audio>
              Q
          </button>
            <button className='drum-pad' key-code='87' id='aW' onClick={this.handleClick}>
              <audio src='#' className='clip' id='W'></audio>
              W
          </button>
            <button className='drum-pad' key-code='69' id='aE' onClick={this.handleClick}>
              <audio src='#' className='clip' id='E'></audio>
              E
          </button>
            <button className='drum-pad' key-code='65' id='aA' onClick={this.handleClick}>
              <audio src='#' className='clip' id='A'></audio>
              A
          </button>
            <button className='drum-pad' key-code='83' id='aS' onClick={this.handleClick}>
              <audio src='#' className='clip' id='S'></audio>
              S
          </button>
            <button className='drum-pad' key-code='68' id='aD' onClick={this.handleClick}>
              <audio src='#' className='clip' id='D'></audio>
              D
          </button>
            <button className='drum-pad' key-code='90' id='aZ' onClick={this.handleClick}>
              <audio src='#' className='clip' id='Z'></audio>
              Z
          </button>
            <button className='drum-pad' key-code='88' id='aX' onClick={this.handleClick}>
              <audio src='#' className='clip' id='X'></audio>
              X
          </button>
            <button className='drum-pad' key-code='67' id='aC' onClick={this.handleClick}>
              <audio src='#' className='clip' id='C'></audio>
              C
          </button>
          </div>
        </div>
      </div>
    );
  }
}
