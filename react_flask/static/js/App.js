// App.jsx
import React from 'react';
import {functions} from './Functions';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  render () {
    return <div>
              <Header test={functions.test} home={functions.home} info={functions.info} booking={functions.booking} packages={functions.packages} prices={functions.prices} pictures={functions.pictures} contact={functions.contact} menu={functions.menutoggle} />
              <Footer />
           </div>;
  }
}
