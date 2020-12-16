import React, { Component } from "react";
import "./PhoneForm.css";

class PhoneForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhone:
        props.currentPhone && props.currentPhone._id ? props.currentPhone : {},
      file: props.file,
    };
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
      <form className="phone-form" onSubmit={this.handleFormSubmit}>
        <label className="label-form">Name:</label>
        <input
          type="text"
          name="name"
          className="input-form"
          value={this.state.currentPhone.name}
          onChange={(event) => this.handleChange(event, "name")}
        />
        <br />

        <label className="label-form">Manufacturer:</label>
        <input
          type="text"
          name="manufacturer"
          className="input-form"
          value={this.state.currentPhone.manufacturer}
          onChange={(event) => this.handleChange(event, "manufacturer")}
        />
        <br />

        <label className="label-form">Description:</label>
        <input
          type="text"
          name="description"
          className="input-form"
          value={this.state.currentPhone.description}
          onChange={(event) => this.handleChange(event, "description")}
        />
        <br />

        <label className="label-form">Color:</label>
        <input
          type="text"
          name="color"
          className="input-form"
          value={this.state.currentPhone.color}
          onChange={(event) => this.handleChange(event, "color")}
        />
        <br />

        <label className="label-form">Price:</label>
        <input
          type="text"
          name="price"
          className="input-form"
          value={this.state.currentPhone.price}
          onChange={(event) => this.handleChange(event, "price")}
        />
        <br />

        <label htmlFor="file-upload" className="label-form">
          Image:
        </label>
        <input
          id="file-upload"
          type="file"
          className="input-form"
          onChange={(event) => this.handleFileUpload(event)}
        />
        <br />
        <div id="info"></div>

        <label className="label-form">Screen:</label>
        <input
          type="text"
          name="screen"
          className="input-form"
          value={this.state.currentPhone.screen}
          onChange={(event) => this.handleChange(event, "screen")}
        />
        <br />

        <label className="label-form">Processor:</label>
        <input
          type="text"
          name="processor"
          className="input-form"
          value={this.state.currentPhone.processor}
          onChange={(event) => this.handleChange(event, "processor")}
        />
        <br />

        <label className="label-form">Ram:</label>
        <input
          type="text"
          name="ram"
          className="input-form"
          value={this.state.currentPhone.ram}
          onChange={(event) => this.handleChange(event, "ram")}
        />
        <br />

        <input className="phone-form-button" type="submit" value="Submit" />
      </form>
    );
  }
}
export default PhoneForm;
