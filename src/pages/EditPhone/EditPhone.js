import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PhoneForm from "../../components/PhoneForm/PhoneForm";
import PhoneService from "../../lib/phone-service";
import FadeLoader from "react-spinners/FadeLoader";
import { Link } from "react-router-dom";
import "./EditPhone.css";

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
          <Link to={"/"}>
            <img className="icons" src="../../../goback.png" alt="back" />{" "}
          </Link>
          {this.state.isLoading && (
            <div className="spinner">
              <FadeLoader color="#16697a" loading={this.state.isLoading} />
            </div>
          )}

          {!this.state.isLoading && (
            <div>
              <h1 className="edit-title">Edit form</h1>
              <PhoneForm
                onSubmit={(currentPhone, file) =>
                  this.handleFormSubmit(currentPhone, file)
                }
                currentPhone={this.state.currentPhone}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default EditPhone;
