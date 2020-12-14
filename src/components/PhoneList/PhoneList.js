import React, { Component } from "react";
import PhoneListItem from "./PhoneListItem";
import { Link } from "react-router-dom";

class PhoneList extends Component {
  render() {
    return (
      <ul>
        {this.props.phones.map((eachPhone, index) => {
          return (
            <Link key={eachPhone._id} to={`/phone/${eachPhone._id}`}>
              <PhoneListItem key={index} onePhone={eachPhone} />
            </Link>
          );
        })}
      </ul>
    );
  }
}

export default PhoneList;
