import React from 'react';
import ReactDom from 'react-dom';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let clickCount = this.state.clicks;
    clickCount++;
    this.setState({ clicks: clickCount });
  }

  render() {
    if (this.state.clicks < 3) {
      return <button onClick={this.handleClick}>Hot Button</button>
    } else if (this.state.clicks < 6) {
      return <button className="three" onClick={this.handleClick}>Hot Button</button>
    } else if (this.state.clicks < 9) {
      return <button className="six" onClick={this.handleClick}>Hot Button</button>
    } else if (this.state.clicks < 12) {
      return <button className="nine" onClick={this.handleClick}>Hot Button</button>
    } else if (this.state.clicks < 15) {
      return <button className="twelve" onClick={this.handleClick}>Hot Button</button>
    } else if (this.state.clicks < 18) {
      return <button className="fifteen" onClick={this.handleClick}>Hot Button</button>
    } else {
      return <button className="eighteen" onClick={this.handleClick}>Hot Button</button>
    }
  }
}
