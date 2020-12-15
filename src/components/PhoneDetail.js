import React from "react";

function PhoneDetail({ eachPhoneDetail }) {
  return (
    <div>
      <div>
        <img src={eachPhoneDetail.imageFileUrl} alt="imageFile" />
      </div>
      <div>
        <h2>{eachPhoneDetail.name}</h2>
        <p>{eachPhoneDetail.manufacturer}</p>
        <p>{eachPhoneDetail.description}</p>
        <p>Color: {eachPhoneDetail.color}</p>
        <p>Screen: {eachPhoneDetail.screen}</p>
        <p>Processor: {eachPhoneDetail.processor}</p>
        <p>Ram: {eachPhoneDetail.ram}</p>
        <p>Total: {eachPhoneDetail.price},00€</p>
      </div>
    </div>
  );
}

export default PhoneDetail;
