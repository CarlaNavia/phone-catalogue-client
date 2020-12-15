import React, { Component } from "react";
import PhoneService from "../../lib/phone-service";
import PhoneDetail from "../../components/PhoneDetail";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import FadeLoader from "react-spinners/FadeLoader";

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
        <FadeLoader color={"#16697a"} loading={this.state.isLoading} />
        <Link to={"/"}> Go back</Link>
        <PhoneDetail eachPhoneDetail={this.state.aPhone} />
        <Link to={`/edit/${this.state.aPhone._id}`}>Edit Phone</Link>
        <button onClick={() => this.deleteOnePhone()}>Delete</button>
      </div>
    );
  }
}
export default PhoneDetailsPage;
