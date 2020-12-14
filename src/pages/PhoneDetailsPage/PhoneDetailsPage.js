import React, { Component } from "react";
import PhoneService from "../../lib/phone-service";
import PhoneDetail from "../../components/PhoneDetail"

class PhoneDetailsPage extends Component {
  state = {
    aPhone: {},
  };

  componentDidMount() {
    this.getOnePhone();
  }

  getOnePhone() {
    PhoneService.getAPhone(this.props.phoneId).then((thePhone) =>
      this.setState({ aPhone: thePhone })
    )
    .catch((err) => {
        console.log(err);
      });
  }

  deleteOnePhone = (phoneId) => {
    PhoneService.deleteAPhone(phoneId).then(() => {
      this.props.history.push("/");
    })
    .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
        <div>
        <PhoneDetail eachPhone={this.state.aPhone} />
        <button onClick={() => this.deleteOnePhone()}>Delete</button>
      </div>
    );
  }
}
export default PhoneDetailsPage;
