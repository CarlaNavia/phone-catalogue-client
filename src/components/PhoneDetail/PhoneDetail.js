import React from "react";
import "./PhoneDetail.css";

function PhoneDetail({ eachPhoneDetail }) {
  return (
    <div className="card-detail">
      <div className="title-photo">
        <h1 className="name-title">{eachPhoneDetail.name}</h1>
        <img
          className="img-detail"
          src={eachPhoneDetail.imageFileUrl}
          alt="imageFile"
        />
      </div>
      <div className="text-details">
        <div className="description">
          <p className="details">{eachPhoneDetail.description}</p>
          <br />
        </div>
        <p className="details">
          <span className="bold-text">Manufacturer:</span>
          {eachPhoneDetail.manufacturer}
        </p>
        <p className="details">
          <span className="bold-text">Color:</span> {eachPhoneDetail.color}
        </p>
        <p className="details">
          <span className="bold-text">Screen:</span> {eachPhoneDetail.screen}
        </p>
        <p className="details">
          <span className="bold-text">Processor:</span>
          {eachPhoneDetail.processor}
        </p>
        <p className="details">
          <span className="bold-text">Ram:</span> {eachPhoneDetail.ram}
        </p>
        <br />
        <div className="price">
          <p>{eachPhoneDetail.price},00€</p>
        </div>
      </div>
    </div>
  );
}

export default PhoneDetail;
