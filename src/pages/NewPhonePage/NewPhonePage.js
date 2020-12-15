import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import PhoneService from "../../lib/phone-service";

class NewPhonePage extends Component {
  state = {
    name: "",
    manufacturer: "",
    description: "",
    color: "",
    price: 0,
    imageFileUrl: "",
    screen: "",
    processor: "",
    ram: 0,
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileUpload = async (event) => {
    const files = event.target.files[0];
    this.setState({ imageFileUrl: files });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const newPhoneResponse = await PhoneService.newPhone(this.state);
      await PhoneService.handleUpload(
        this.state.imageFileUrl,
        newPhoneResponse._id
      );
      this.props.history.push("/");
    } catch (error) {
      console.log("Error while adding a new phone: ", error);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(event) => this.handleChange(event)}
            />

            <label>Manufacturer:</label>
            <input
              type="text"
              name="manufacturer"
              value={this.state.manufacturer}
              onChange={(event) => this.handleChange(event)}
            />

            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={(event) => this.handleChange(event)}
            />

            <label>Color:</label>
            <input
              type="text"
              name="color"
              value={this.state.color}
              onChange={(event) => this.handleChange(event)}
            />

            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={this.state.price}
              onChange={(event) => this.handleChange(event)}
            />

            <label htmlFor="file-upload">Image:</label>
            <input
              id="file-upload"
              type="file"
              onChange={(event) => this.handleFileUpload(event)}
            />
            <div id="info"></div>

            <label>Screen:</label>
            <input
              type="text"
              name="screen"
              value={this.state.screen}
              onChange={(event) => this.handleChange(event)}
            />

            <label>Processor:</label>
            <input
              type="text"
              name="processor"
              value={this.state.processor}
              onChange={(event) => this.handleChange(event)}
            />

            <label>Ram:</label>
            <input
              type="text"
              name="ram"
              value={this.state.ram}
              onChange={(event) => this.handleChange(event)}
            />

            <input type="submit" value="ADD NOW" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewPhonePage;
