import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PhoneService from "../../lib/phone-service";
import PhoneList from "../../components/PhoneList/PhoneList";

class Phones extends Component {
  state = {
    listOfPhones: [],
  };

  componentDidMount() {
    this.getAllPhonesList();
  }

  getAllPhonesList = () => {
    PhoneService.getAllPhones().then((responseFromApi) => {
      this.setState({
        listOfPhones: responseFromApi,
      });
    });
  };

  render() {
    return (
      <div>
        <Link to="/new">Add a new phone</Link>
        {this.state.listOfPhones.length > 0 && (
          <PhoneList phones={this.state.listOfPhones} />
        )}

      </div>
    );
  }
}
export default Phones;
