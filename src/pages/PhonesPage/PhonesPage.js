import React, { Component } from "react";
import PhoneService from "../../lib/phone-service";
import PhoneList from "../../components/PhoneList/PhoneList";
import Navbar from "../../components/Navbar/Navbar";
import FadeLoader from "react-spinners/FadeLoader";
import "./PhonesPage.css";

class PhonesPage extends Component {
  state = {
    listOfPhones: [],
    isLoading: false,
  };

  componentDidMount() {
    this.getAllPhonesList();
  }

  getAllPhonesList = () => {
    this.setState({ isLoading: true });
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
        <div className="page">
          <FadeLoader color="#16697a" loading={this.state.isLoading} />
          <h1 className="home-title">Which phone are you looking for?</h1>
          {!this.state.isLoading && (
            <PhoneList eachPhone={this.state.listOfPhones} />
          )}
        </div>
      </div>
    );
  }
}
export default PhonesPage;
