import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Phones from './pages/PhonesPage/PhonesPage';
import NewPhone from './pages/NewPhonePage/NewPhonePage'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Phones} />
        {/* <Route exact path="/phone/:id" component={PhoneDetail} /> */}
        <Route exact path="/new" component={NewPhone} />
      </div>
    )
  }
}


export default App;
