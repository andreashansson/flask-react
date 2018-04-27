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
        <button onClick={this.props.funk}>Button2</button>
      </div>
    )
  }
}
