// App.jsx
import React from 'react';
import {fetchData} from './Fetch';
import {test} from './Test';
import {functions} from './Functions';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  render () {
    return <div>
              <Header home={functions.home} info={functions.info} booking={functions.booking} packages={functions.packages} prices={functions.prices} pictures={functions.pictures} contact={functions.contact} />
              <Footer />
           </div>;
  }
}
