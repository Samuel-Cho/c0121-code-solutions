import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './stopwatch';

class CustomStopwatch extends React.Component {
  render() {
    return <Stopwatch />
  }
}

ReactDOM.render(<CustomStopwatch />, document.querySelector('#root'));
