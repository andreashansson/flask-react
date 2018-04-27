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
      <div>
        <button onClick={this.props.fetch}>Button2</button>
      </div>
    )
  }
}
