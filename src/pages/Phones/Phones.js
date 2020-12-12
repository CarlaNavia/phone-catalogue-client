import React, { Component } from "react";
import PhoneService from '../../lib/phone-service'
import PhoneList from '../../components/PhoneList/PhoneList'

class Phones extends Component {
  state = {
    listOfPhones: [],
  };

  componentDidMount() {
      this.getAllPhonesList()
  }

  getAllPhonesList = () => {
    PhoneService.getAllPhones()
      .then((responseFromApi) => {
        this.setState({
          listOfPhones: responseFromApi,
        });
      });
  };

  render() {
    return <div>
     {this.state.listOfPhones.length > 0 && (
            <PhoneList phones={this.state.listOfPhones} />
          )}
    </div>;
  }
}
export default Phones;
