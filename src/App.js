import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SoundDisplay from './components/SoundDisplay';
import DrumPads from './components/DrumPads';

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
        <Header />
        <div id='drum-machine'>
          <SoundDisplay showDisplay={this.state.display} />
          <DrumPads clicked={this.handleClick} sound={soundTest} />
        </div>
        <Footer />
      </div>
    );
  }
}
