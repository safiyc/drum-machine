import React from 'react';

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
    // console.log(e);
  }

  handleKeyPress(e) {
    const el = document.querySelector(`[value="${e.keyCode}"]`);
    if (el === null) {
      // console.log('nope');
      return;
    } else {
      // console.log(el);
      this.setState({
        display: el.getAttribute('id')
      })
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
              {/* <audio src='#' className='clip' id='Q'></audio> */}
              Q
            </button>
            <button className='drum-pad' value='87' id='aW' onClick={this.handleClick}>
              <audio src='#' className='clip' id='W'></audio>
              W
            </button>
            <button className='drum-pad' value='69' id='aE' onClick={this.handleClick}>
              <audio src='#' className='clip' id='E'></audio>
              E
            </button>
            <button className='drum-pad' value='65' id='aA' onClick={this.handleClick}>
              <audio src='#' className='clip' id='A'></audio>
              A
            </button>
            <button className='drum-pad' value='83' id='aS' onClick={this.handleClick}>
              <audio src='#' className='clip' id='S'></audio>
              S
            </button>
            <button className='drum-pad' value='68' id='aD' onClick={this.handleClick}>
              <audio src='#' className='clip' id='D'></audio>
              D
            </button>
            <button className='drum-pad' value='90' id='aZ' onClick={this.handleClick}>
              <audio src='#' className='clip' id='Z'></audio>
              Z
            </button>
            <button className='drum-pad' value='88' id='aX' onClick={this.handleClick}>
              <audio src='#' className='clip' id='X'></audio>
              X
            </button>
            <button className='drum-pad' value='67' id='aC' onClick={this.handleClick}>
              <audio src='#' className='clip' id='C'></audio>
              C
            </button>
          </div>
        </div>
      </div>
    );
  }
}
