import React from 'react';
import ReactDOM from 'react-dom';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isPaused: true, seconds: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isPaused === true && event.target.matches('.fa-play')) {
      this.setState({isPaused: false});
      this.timerID = setInterval(() => {
        let secondsPast = this.state.seconds;
        secondsPast++
        this.setState({seconds: secondsPast});
      }, 1000);
    } else if (this.state.isPaused === true && event.target.matches('.stopwatch')) {
      this.setState({seconds: 0});
    } else {
      if (event.target.matches('.fa-pause')) {
        this.setState({isPaused: true});
        clearInterval(this.timerID);
      }
    }
  }

  render() {
    if (this.state.isPaused === true) {
      return (
        <div className="container">
          <div className="stopwatch" onClick={this.handleClick}>
            <p>{this.state.seconds}</p>
          </div>
          <i className="fas fa-play" onClick={this.handleClick}></i>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="stopwatch">
            <p>{this.state.seconds}</p>
          </div>
          <i className="fas fa-pause" onClick={this.handleClick}></i>
        </div>
      );
    }
  }
}
