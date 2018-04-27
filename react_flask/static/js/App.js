// App.jsx
import React from 'react';
import {fetchData} from './Fetch';
import Button from './Button';

export default class App extends React.Component {
  render () {
    return <div className="container">
              <Button fetch={fetchData} />
           </div>;
  }
}
