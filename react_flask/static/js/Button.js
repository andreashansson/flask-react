import React from 'react';
import Fetch from './Fetch';
export default class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  fetchData(method) {
    fetch("/api", {method: method}).then(function(response) {
      return response.json();
    }).then(function(result) {
      console.log(result);
    });
  }


  render () {
    return (
      <div>
        <button onClick={this.fetchData("POST")}>Button1</button>
        <button onClick={this.fetchData("GET")}>Button2</button>
      </div>
    )
  }
}
