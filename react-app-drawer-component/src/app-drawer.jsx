import React from 'react';
import ReactDOM from 'react-dom';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {drawerClosed: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.drawerClosed === true) {
      this.setState({drawerClosed: false});
    } else {
      this.setState({drawerClosed: true});
    }
  }

  render() {
    if (this.state.drawerClosed === true) {
      return <i className="fas fa-bars" onClick={this.handleClick}></i>
    } else {
      return (
        <div className="container">
          <div className="menu-container">
            <h2>Menu</h2>
            <ul>
              <li onClick={this.handleClick}>About</li>
              <li onClick={this.handleClick}>Get Started</li>
              <li onClick={this.handleClick}>Sign In</li>
            </ul>
          </div>
          <div className="modal" onClick={this.handleClick}></div>
        </div>
      );
    }
  }
}
