import React from 'react';
import ReactDOM from 'react-dom';
const $root = document.querySelector('#root');
const heading = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
ReactDOM.render(heading, $root);
