import './App.css';
import github from './imgs/github-blue.png';
import instagram from './imgs/instagram-blue.png';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeSquare = this.changeSquare.bind(this);
  }

  state = {
    colours: [
      '#CDF0EA',
      '#ECC5FB',
      '#A7D2CB',
      '#EC7272',
      '#6FEDD6',
      '#14C38E',
      '#FFA8A8',
      '#E9DAC1',
      '#CDF2CA',
      '#CAF7E3',
    ],
  };

  componentDidMount() {
    for (let i = 1; i < 10; i++) {
      let x = Math.floor(Math.random() * this.state.colours.length);
      document.getElementById(`square${i}`).style.backgroundColor =
        this.state.colours[x];
      console.log(x);
    }
  }

  changeSquare = (event) => {
    let x = Math.floor(Math.random() * this.state.colours.length);
    event.target.style.backgroundColor = this.state.colours[x];
  };

  render() {
    return (
      <div className='main-wrapper'>
        <div className='header'></div>
        <div className='socials'>
          <img
            className='social-icon'
            src={github}
            alt='github-link'
            width='50%'
          />
          <img
            className='social-icon'
            src={instagram}
            alt='github-link'
            width='50%'
          />
        </div>
        <div className='body-text center'>
          <p className='body-text-content'>
            .who-is-frazer &#123;
            <br />
            &nbsp;&nbsp;age: 26;
            <br />
            &nbsp; &nbsp;personality: creative;
            <br />
            &nbsp; &nbsp;skills: <br />
            &nbsp; &nbsp; &nbsp; &nbsp;web-dev;
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp;web-design; <br />
            &nbsp; &nbsp;location: Sheffield-UK;
            <br />
            &nbsp; &nbsp;projects: click-here; <br />
            &#125;
          </p>
        </div>
        <div className='squares-grid'>
          <div
            id='square1'
            className='square'
            onClick={(event) => this.changeSquare(event)}
          ></div>
          <div
            id='square2'
            className='square'
            onClick={(event) => this.changeSquare(event)}
          ></div>
          <div
            id='square3'
            className='square'
            onClick={(event) => this.changeSquare(event)}
          ></div>
          <div
            id='square4'
            className='square'
            onClick={(event) => this.changeSquare(event)}
          ></div>
          <div
            id='square5'
            className='square'
            onClick={(event) => this.changeSquare(event)}
          ></div>
          <div
            id='square6'
            className='square'
            onClick={(event) => this.changeSquare(event)}
          ></div>
          <div
            id='square7'
            className='square'
            onClick={(event) => this.changeSquare(event)}
          ></div>
          <div
            id='square8'
            className='square'
            onClick={(event) => this.changeSquare(event)}
          ></div>
          <div
            id='square9'
            className='square'
            onClick={(event) => this.changeSquare(event)}
          ></div>
        </div>
      </div>
    );
  }
}

export default App;
