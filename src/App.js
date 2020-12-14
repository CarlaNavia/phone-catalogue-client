import React, { Component } from "react";
import { Route } from "react-router-dom";
import Phones from "./pages/PhonesPage/PhonesPage";
import NewPhone from "./pages/NewPhonePage/NewPhonePage";
import PhoneDetail from "./pages/PhoneDetailsPage/PhoneDetailsPage"
import EditPhone from "./pages/EditPhone/EditPhone";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Phones} />
        <Route exact path="/new" component={NewPhone} />
        <Route exact path="/phone/:id" component={PhoneDetail} />
        <Route exact path="/edit/:id" component={EditPhone} />
      </div>
    );
  }
}

export default App;
