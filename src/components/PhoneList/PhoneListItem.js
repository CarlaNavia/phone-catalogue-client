import React, { Component } from "react";


class PhoneListItem extends Component {
  render() {
    return (
      <div key={this.props.onePhone._id}>
        <div>
          <img src={this.props.onePhone.imageFileUrl} alt="phone" />
        </div>
        <div>
          <p>{this.props.onePhone.name}</p>
        </div>

        <div>
          <p>{this.props.onePhone.description}</p>
          <p>{this.props.onePhone.screen} </p>
        </div>
      </div>
    );
  }
}
export default PhoneListItem;
