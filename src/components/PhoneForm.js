import React, { Component } from "react";

class PhoneForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPhone: props.currentPhone, file: props.file };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.currentPhone, this.state.file);
  };

  handleChange(event, propertyName) {
    let copyPhone = this.state.currentPhone;
    copyPhone[propertyName] = event.target.value;
    this.setState({
      currentPhone: copyPhone,
    });
  }

  handleFileUpload = async (event) => {
    const files = event.target.files[0];
    this.setState({ file: files });
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
              value={this.state.currentPhone.name}
              onChange={(event) => this.handleChange(event, "name")}
            />

            <label>Manufacturer:</label>
            <input
              type="text"
              name="manufacturer"
              value={this.state.currentPhone.manufacturer}
              onChange={(event) => this.handleChange(event, "manufacturer")}
            />

            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={this.state.currentPhone.description}
              onChange={(event) => this.handleChange(event, "description")}
            />

            <label>Color:</label>
            <input
              type="text"
              name="color"
              value={this.state.currentPhone.color}
              onChange={(event) => this.handleChange(event, "color")}
            />

            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={this.state.currentPhone.price}
              onChange={(event) => this.handleChange(event, "price")}
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
              value={this.state.currentPhone.screen}
              onChange={(event) => this.handleChange(event, "screen")}
            />

            <label>Processor:</label>
            <input
              type="text"
              name="processor"
              value={this.state.currentPhone.processor}
              onChange={(event) => this.handleChange(event, "processor")}
            />

            <label>Ram:</label>
            <input
              type="text"
              name="ram"
              value={this.state.currentPhone.ram}
              onChange={(event) => this.handleChange(event, "ram")}
            />

            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default PhoneForm;
