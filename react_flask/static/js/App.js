// App.jsx
import React from 'react';
import {fetchData} from './Fetch';
import {test} from './Test';
import Button from './Button';

export default class App extends React.Component {
  render () {
    return <div className="container">
              <Button funk={fetchData} />
              <Button funk={test} />
           </div>;
  }
}
