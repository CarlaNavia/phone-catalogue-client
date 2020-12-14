import React, { Component } from "react";
import PhoneService from "../../lib/phone-service";
import PhoneDetail from "../../components/PhoneDetail";

class PhoneDetailsPage extends Component {
  state = {
    aPhone: {},
  };

  componentDidMount() {
    this.getOnePhone();
  }

  getOnePhone = () => {
    const { params } = this.props.match;
    PhoneService.getAPhone(params.id)
      .then((responseFromApi) => {
        this.setState({ aPhone: responseFromApi });
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
        <PhoneDetail eachPhoneDetail={this.state.aPhone} />
        <button onClick={() => this.deleteOnePhone()}>Delete</button>
      </div>
    );
  }
}
export default PhoneDetailsPage;
