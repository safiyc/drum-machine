import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SoundDisplay from './components/SoundDisplay';
import DrumPads from './components/DrumPads';

import soundTest from './asset/animals_lion_growl_001.mp3';

const drumPads = [
  {
    value: 'Q',
    id: 'idQ',
    nestedAudio: {
      src: soundTest
    }
  },
  {
    value: 'W',
    id: 'idW',
    nestedAudio: {
      src: soundTest
    }
  },
  {
    value: 'E',
    id: 'idE',
    nestedAudio: {
      src: soundTest
    }
  },
  {
    value: 'A',
    id: 'idA',
    nestedAudio: {
      src: soundTest
    }
  },
  {
    value: 'S',
    id: 'idS',
    nestedAudio: {
      src: soundTest
    }
  },
  {
    value: 'D',
    id: 'idD',
    nestedAudio: {
      src: soundTest
    }
  },
  {
    value: 'Z',
    id: 'idZ',
    nestedAudio: {
      src: soundTest
    }
  },
  {
    value: 'X',
    id: 'idX',
    nestedAudio: {
      src: soundTest
    }
  },
  {
    value: 'C',
    id: 'idC',
    nestedAudio: {
      src: soundTest
    }
  }
];

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
    const el = document.querySelector(`[value="${e.key.toUpperCase()}"]`);

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
          <div id='drum-it'>
            {drumPads.map((data, index) => {
              return (
                <DrumPads
                  key={index}
                  value={data.value}
                  id={data.id}
                  onClick={this.handleClick}
                  nestedAudioSrc={data.nestedAudio.src}
                  nestedAudioId={data.value} />
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
