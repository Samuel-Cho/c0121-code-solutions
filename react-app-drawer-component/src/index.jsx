import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer';

class CustomAppDrawer extends React.Component {
  render() {
    return <AppDrawer />
  }
}

ReactDOM.render(<CustomAppDrawer />, document.querySelector('#root'));
