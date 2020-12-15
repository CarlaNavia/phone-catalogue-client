import React, { Component } from "react";
import "./PhoneListItem.css";

class PhoneListItem extends Component {
  render() {
    return (
      <div key={this.props.onePhone._id} className="card">
        <div>
          <h3 className="name">{this.props.onePhone.name}</h3>
        </div>
        <div className="card-content">
          <div className="distr-card">
            <img
              src={this.props.onePhone.imageFileUrl}
              alt={this.props.onePhone.name}
            />
          </div>

          <div className="distr-card text">
            <div>
              <p >
                <span className="bold-text">Screen:</span>
                {this.props.onePhone.screen}"
              </p>
              <p >
                <span className="bold-text">Manufacturer:</span>
                {this.props.onePhone.manufacturer}
              </p>
              <p >
                <span className="bold-text">Processor:</span>
                {this.props.onePhone.processor}
              </p>
            </div>
            <div className="price-position">
              <p className="price">{this.props.onePhone.price},00€</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PhoneListItem;
