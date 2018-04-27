// App.jsx
import React from 'react';
export default class Test extends React.Component {
  render () {
    return <p className="test"> Test!</p>;
  }
}

export var test = function() {
  fetch("/test/andreas/", {method: "GET"}).then(function(response) {
    return response.json();
  }).then(function(result) {
    console.log(result);
  });
}
