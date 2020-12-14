import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhoneService from "../../lib/phone-service";
import PhoneList from "../../components/PhoneList/PhoneList";

class PhonesPage extends Component {
  state = {
    listOfPhones: [],
  };

  componentDidMount() {
    this.getAllPhonesList();
  }

  getAllPhonesList = () => {
    PhoneService.getAllPhones()
      .then((responseFromApi) => {
        this.setState({
          listOfPhones: responseFromApi,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <Link to="/new">Add a new phone</Link>
        <div>
          {this.state.listOfPhones.length > 0 &&
            this.state.listOfPhones.map((eachPhone) => {
              return (
                <Link key={eachPhone._id} to={`/phone/${eachPhone._id}`}>
                  <PhoneList eachPhone={this.state.listOfPhones} />
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
}
export default PhonesPage;
