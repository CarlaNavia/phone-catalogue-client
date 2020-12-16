import React, { Component } from "react";
import PhoneService from "../../lib/phone-service";
import PhoneDetail from "../../components/PhoneDetail/PhoneDetail";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import FadeLoader from "react-spinners/FadeLoader";
import "./PhoneDetailsPage.css";

class PhoneDetailsPage extends Component {
  state = {
    aPhone: {},
    isLoading: false,
  };

  componentDidMount() {
    this.getOnePhone();
  }

  getOnePhone = () => {
    const { params } = this.props.match;
    this.setState({ isLoading: true });
    PhoneService.getAPhone(params.id)
      .then((responseFromApi) => {
        this.setState({
          aPhone: responseFromApi,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteOnePhone = () => {
    const { params } = this.props.match;
    PhoneService.deleteAPhone(params.id)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="page">
          {this.state.isLoading && (
            <div className="spinner">
              <FadeLoader color="#16697a" loading={this.state.isLoading} />
            </div>
          )}

          {!this.state.isLoading && (
            <div>
              <div className="action-btn">
                <Link to={"/"}>
                  <img className="icons" src="../../../goback.png" alt="back" />
                </Link>
                <div className="actions">
                  <Link to={`/edit/${this.state.aPhone._id}`}>
                    <img
                      className="icons margin_buttons"
                      src="../../../edit.png"
                      alt="edit"
                    />
                  </Link>
                  <button
                    className="delete-btn"
                    onClick={() => this.deleteOnePhone()}
                  >
                    <img
                      className="icons"
                      src="../../../delete.png"
                      alt="delete"
                    />
                  </button>
                </div>
              </div>
              <PhoneDetail eachPhoneDetail={this.state.aPhone} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default PhoneDetailsPage;
