import React from 'react';
export default class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render () {
    return (
      <header>
        <div className="left-header">
          <div className="header-logo-container"><img src="dist/images/antihero-logo.png" /></div>
        </div>
        <div className="right-header">
          <div className="ham-menu">
            <img src="dist/images/menu.png" />
          </div>
          <ul className="nav-menu">
            <li onClick={this.props.home}>HOME</li>
            <li onClick={this.props.info}>INFO</li>
            <li onClick={this.props.booking}>BOOKING</li>
            <li onClick={this.props.packages}>PACKAGES</li>
            <li onClick={this.props.prices}>PRICES</li>
            <li onClick={this.props.pictures}>PICTURES</li>
            <li onClick={this.props.contact}>CONTACT</li>
          </ul>
        </div>
      </header>
    )
  }
}
