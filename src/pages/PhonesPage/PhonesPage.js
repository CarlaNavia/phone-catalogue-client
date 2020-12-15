import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhoneService from "../../lib/phone-service";
import PhoneList from "../../components/PhoneList/PhoneList";
import Navbar from "../../components/Navbar/Navbar";
import FadeLoader from "react-spinners/FadeLoader";

class PhonesPage extends Component {
  state = {
    listOfPhones: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getAllPhonesList();
  }

  getAllPhonesList = () => {
    PhoneService.getAllPhones()
      .then((responseFromApi) => {
        this.setState({
          listOfPhones: responseFromApi,
          isLoading: false,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <Navbar />
        <FadeLoader color={"#16697a"} loading={this.state.isLoading} />
        <h1>Which phone are you looking for?</h1>
        <Link to="/new">Add a new phone</Link>
        {!this.state.isLoading && (
          <PhoneList eachPhone={this.state.listOfPhones} />
        )}
      </div>
    );
  }
}
export default PhonesPage;
