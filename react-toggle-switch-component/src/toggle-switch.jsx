import React from 'react';
import ReactDOM from 'react-dom';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: "off" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.toggle === "off") {
      this.setState({ toggle: "on" });
    } else {
      this.setState({ toggle: "off" });
    }
  }

  render() {
    if(this.state.toggle === "off") {
      return (
        <div className="container">
          <div className="slider-off slider-container" onClick={this.handleClick}>
            <button className="off" onClick={this.handleClick}></button>
          </div>
          <p onClick={this.handleClick}>{this.state.toggle.toUpperCase()}</p>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="slider-on slider-container" onClick={this.handleClick}>
            <button className="on" onClick={this.handleClick}></button>
          </div>
          <p onClick={this.handleClick}>{this.state.toggle.toUpperCase()}</p>
        </div>
      );
    }
  }
}
