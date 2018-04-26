import React from 'react';
export default class Button extends React.Component {

  // DEnna behövs inte men har kvar den tills jag vet vad jag har constructorn till.
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  };

  fetchData() {
    console.log("fetchData runs");
    fetch("/api", {method: "POST"}).then(function(response) {
      console.log("FIRST THEN RESULT");
      console.log(response);
      return response.json();
    }).then(function(result) {
      console.log("SECOND THEN RESULT");
      console.log(result);
    });
  }


  render () {
    return (
      <div>
        <button onClick={this.fetchData()}>Button1</button>
      </div>
    )
  }
}
