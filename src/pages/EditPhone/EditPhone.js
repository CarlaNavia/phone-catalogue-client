import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PhoneForm from "../../components/PhoneForm";
import PhoneService from "../../lib/phone-service";
import FadeLoader from "react-spinners/FadeLoader";

class EditPhone extends Component {
  state = {
    currentPhone: {},
    isLoading: false,
  };

  getOnePhone = () => {
    const { params } = this.props.match;
    this.setState({ isLoading: true });
    PhoneService.getAPhone(params.id)
      .then((responseFromApi) => {
        this.setState({
          currentPhone: responseFromApi,
          isLoading: false,
        });
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
    this.setState({ isLoading: true });
    PhoneService.editAPhone(currentPhone._id, currentPhone)
      .then(() => {
        if (!file) {
          this.setState({ isLoading: false });
          this.props.history.push("/");
        } else {
          PhoneService.handleUpload(file, currentPhone._id).then(() => {
            this.setState({ isLoading: false });
            this.props.history.push("/");
          });
        }
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getOnePhone();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="page">
        <FadeLoader color="#16697a" loading={this.state.isLoading} />
        {!this.state.isLoading && (
          <PhoneForm
            onSubmit={(currentPhone, file) =>
              this.handleFormSubmit(currentPhone, file)
            }
            currentPhone={this.state.currentPhone}
          />
        )}
        </div>
      </div>
    );
  }
}

export default EditPhone;
