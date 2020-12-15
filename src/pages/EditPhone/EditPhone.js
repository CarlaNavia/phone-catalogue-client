import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PhoneForm from "../../components/PhoneForm";
import PhoneService from "../../lib/phone-service";

class EditPhone extends Component {
  state = {
    currentPhone: {},
    isLoading: true,
  };

  getOnePhone = () => {
    const { params } = this.props.match;
    PhoneService.getAPhone(params.id)
      .then((responseFromApi) => {
        this.setState({ currentPhone: responseFromApi, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleFileUpload(event) {
    const files = event.target.files[0];
    PhoneService.handleUpload(files).then((data) => {
      this.setState({ currentPhone: data });
    });
  }

  handleChange(event, propertyName) {
    let copyPhone = this.state.currentPhone;
    copyPhone[propertyName] = event.target.value;
    this.setState({ currentPhone: copyPhone });
  }

  handleFormSubmit = (currentPhone, file) => {
    try {
      PhoneService.editAPhone(currentPhone._id, currentPhone);
      if (!file) {
        this.props.history.push("/");
      } else {
        PhoneService.handleUpload
      (file, currentPhone._id).then(() => {
          this.props.history.push("/");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getOnePhone();
  }

  render() {
    return (
      <div>
        <Navbar />
        {!this.state.isLoading && (
          <PhoneForm
            onSubmit={(currentPhone, file) =>
              this.handleFormSubmit(currentPhone, file)
            }
            currentPhone={this.state.currentPhone}
          />
        )}
      </div>
    );
  }
}

export default EditPhone;
