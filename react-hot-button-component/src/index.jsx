import React from 'react';
import ReactDom from 'react-dom';
import HotButton from './hot-button';

class CustomButton extends React.Component {
  render() {
    return <HotButton />
  }
}

ReactDom.render(<CustomButton />, document.querySelector('#root'));
