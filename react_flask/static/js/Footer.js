import React from 'react';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render () {
    return (
      <footer>
        <h1>Footer2</h1>
        <p>Test</p>
      </footer>
    )
  }
}
