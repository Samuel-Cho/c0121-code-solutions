import React from 'react';
import ReactDom from 'react-dom';
const $root = document.querySelector('#root');

const CustomButton = () => {
  return <button>Click Me!</button>;
}

const element = <CustomButton />
ReactDom.render(element, $root);
