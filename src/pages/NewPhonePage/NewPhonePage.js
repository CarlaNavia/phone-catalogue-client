import React, { Component } from "react";
import PhoneService from "../../lib/phone-service";

class NewPhonePage extends Component {
  state = {
    name: "",
    manufacturer: "",
    description: "",
    color: "",
    price: 0,
    imageFileName: "",
    screen: "",
    processor: "",
    ram: 0,
  };

  handleChange = (updatedInfo) => {
    const { name, value } = updatedInfo.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await PhoneService.newPhone(this.state); 
      this.setState({
        name: "",
        manufacturer: "",
        description: "",
        color: "",
        price: 0,
        imageFileName: "",
        screen: "",
        processor: "",
        ram: 0,
      });
      this.props.history.push("/");
    } catch (error) {
      console.log("Error while adding a new phone: ", error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />

            <label>Manufacturer:</label>
            <input
              type="text"
              name="manufacturer"
              value={this.state.manufacturer}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />
            <label>Color:</label>
            <input
              type="text"
              name="color"
              value={this.state.color}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={this.state.price}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />
            <label>Image:</label>
            <input
              type="text"
              name="imageFileName"
              value={this.state.imageFileName}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />

            <label>Screen:</label>
            <input
              type="text"
              name="screen"
              value={this.state.screen}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />

            <label>Processor:</label>
            <input
              type="text"
              name="processor"
              value={this.state.processor}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />
            <label>Ram:</label>
            <input
              type="text"
              name="ram"
              value={this.state.ram}
              onChange={(updatedInfo) => this.handleChange(updatedInfo)}
            />
            <br />

            <input type="submit" value="ADD NOW" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewPhonePage;
