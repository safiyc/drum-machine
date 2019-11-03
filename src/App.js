import React from 'react';
import GlobalStyle from './util/globalStyles';
import * as HF from './appStyling';
import * as S from './components/styling/drumMachineStyling';

import DrumIt from './components/DrumPads';
import soundTest from './asset/animals_lion_growl_001.mp3';
import imageDrum from './asset/drum-set.png';

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
        <GlobalStyle />
        <HF.Heading>
          <HF.ProjectName>Drum It!</HF.ProjectName>
        </HF.Heading>
        <HF.Subheading>Scroll<br /> &#9660;&#9650;</HF.Subheading>
        <S.ContentSection id='drum-machine'>
          <S.SoundDisplay>{this.state.display}</S.SoundDisplay>
          {/* <S.DrumSetContainer> */}
          <S.ltrLocationTest>X</S.ltrLocationTest>
          <S.DrumImg src={imageDrum} alt='testbg' />
          <S.DrumStageOverlay />
          <S.DrumStage />

          {drumPads.map((data, index) => {
            return (
              <DrumIt
                key={index}
                value={data.value}
                id={data.id}
                onClick={this.handleClick}
                nestedAudioSrc={data.nestedAudio.src}
                nestedAudioId={data.value} />
            )
          })}
          {/* </S.DrumSetContainer> */}
        </S.ContentSection>
        <HF.Footer>
          <HF.FooterLink href="http://www.safiycham.com/">
            Drum It!&nbsp;&ndash;&nbsp;safiy cham &nbsp;&#169;&nbsp;2019
          </HF.FooterLink>
        </HF.Footer>
      </div>
    );
  }
}