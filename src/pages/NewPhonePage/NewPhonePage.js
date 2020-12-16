import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PhoneForm from "../../components/PhoneForm/PhoneForm";
import PhoneService from "../../lib/phone-service";
import FadeLoader from "react-spinners/FadeLoader";
import "./NewPhonePage.css";
import { Link } from "react-router-dom";

class NewPhonePage extends Component {
  state = {
    isLoading: false,
  };

  handleFormSubmit = async (currentPhone, file) => {
    try {
      this.setState({ isLoading: true });
      const newPhoneResponse = await PhoneService.newPhone(currentPhone);
      await PhoneService.handleUpload(file, newPhoneResponse._id);
      this.props.history.push("/");
    } catch (error) {
      console.log("Error while adding a new phone: ", error);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="page">
          <Link to={"/"}>
            <img className="icons" src="../../../goback.png" alt="back" />{" "}
          </Link>
          <FadeLoader color="#16697a" loading={this.state.isLoading} />
          <h1 className="add-title">Add a new phone!</h1>
          <PhoneForm onSubmit={this.handleFormSubmit} />
        </div>
      </div>
    );
  }
}

export default NewPhonePage;
