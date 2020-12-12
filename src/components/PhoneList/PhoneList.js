import React, { Component } from "react";
import PhoneListItem from "./PhoneListItem"

class PhoneList extends Component {
  render() {
    return (
      <ul>
        {this.props.phones.map((eachPhone, index) => {
          return (
            <PhoneListItem
              key={index}
              onePhone={eachPhone}
            />
          );
        })}
      </ul>
    );
  }
}

export default PhoneList;
