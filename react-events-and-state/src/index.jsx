import React from 'react';
import ReactDOM from 'react-dom';

const $root = document.querySelector('#root');

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked) {
      return <button>Thanks!</button>
    } else {
      return <button onClick={this.handleClick}>Click Me!</button>
    }
  }
}

const element = (
  <div>
    <CustomButton />
  </div>
);

ReactDOM.render(element, $root);
