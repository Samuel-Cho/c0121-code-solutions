import React from 'react';
import ReactDOM from 'react-dom';
import ToggleSwitch from './toggle-switch';

class CustomSwitch extends React.Component {
  render() {
    return <ToggleSwitch />
  }
}

ReactDOM.render(<CustomSwitch />, document.querySelector('#root'));
