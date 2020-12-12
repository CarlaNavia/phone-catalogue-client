import React, { Component } from "react";
import PhoneService from '../../lib/phone-service'

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
          console.log(responseFromApi, "response")
        this.setState({
          listOfPhones: responseFromApi,
        });
      });
  };

  render() {
    return <div>
        {this.state.listOfPhones.length > 0 && this.state.listOfPhones.map((eachPhone, index) => {
            return(
                <ul key={index._id}>
                    <li>{eachPhone.name}</li>
                </ul>
            )
        })}
    </div>;
  }
}
export default Phones;
