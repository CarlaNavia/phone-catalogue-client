import React from "react";

function PhoneDetail({ eachPhone }) {
  return (
    <div>
      <h2>{eachPhone.name}</h2>
      <p>{eachPhone.manufacturer}</p>
      <p>{eachPhone.description}</p>
      <p>{eachPhone.color}</p>
      <p>{eachPhone.price}</p>
      <img src={eachPhone.imageFileUrl} alt="imageFile" />
      <p>{eachPhone.screen}</p>
      <p>{eachPhone.processor}</p>
      <p>{eachPhone.ram}</p>
    </div>
  );
}

export default PhoneDetail;
