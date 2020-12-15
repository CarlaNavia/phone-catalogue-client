import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PhoneForm from "../../components/PhoneForm";
import PhoneService from "../../lib/phone-service";

class NewPhonePage extends Component {

  handleFormSubmit = async (currentPhone, file) => {
    try {
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
        <PhoneForm onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default NewPhonePage;
