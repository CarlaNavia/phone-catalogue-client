import React from "react";

function PhoneDetail({ eachPhoneDetail }) {
  return (
    <div>
      <h2>{eachPhoneDetail.name}</h2>
      <p>{eachPhoneDetail.manufacturer}</p>
      <p>{eachPhoneDetail.description}</p>
      <p>{eachPhoneDetail.color}</p>
      <p>{eachPhoneDetail.price}</p>
      <img src={eachPhoneDetail.imageFileUrl} alt="imageFile" />
      <p>{eachPhoneDetail.screen}</p>
      <p>{eachPhoneDetail.processor}</p>
      <p>{eachPhoneDetail.ram}</p>
    </div>
  );
}

export default PhoneDetail;
