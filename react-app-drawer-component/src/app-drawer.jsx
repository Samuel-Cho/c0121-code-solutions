import React from 'react',
import ReactDOM from 'reacto-dom',

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
            <h3>Menu</h3>
            <ol>
              <li onClick={this.handleClick}>About</li>
              <li onClick={this.handleClick}>Get Started</li>
              <li onClick={this.handleClick}>Sign In</li>
            </ol>
          </div>
          <div className="modal" onClick={this.handleClick}></div>
        </div>
      );
    }
  }
}
