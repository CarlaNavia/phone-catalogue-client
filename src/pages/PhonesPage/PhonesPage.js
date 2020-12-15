import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhoneService from "../../lib/phone-service";
import PhoneList from "../../components/PhoneList/PhoneList";
import Navbar from "../../components/Navbar/Navbar";

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
      <Navbar />
      <h1>Which phone are you looking for?</h1>
        <Link to="/new">Add a new phone</Link>
        <div>
          <Link to={`/phone/${this.state.listOfPhones._id}`}>
            <PhoneList eachPhone={this.state.listOfPhones} />
          </Link>
        </div>
      </div>
    );
  }
}
export default PhonesPage;
