import React from "react";
import { imageBaseUrl } from "../Links";

const Popup = ({ closePopup }) => {
  const registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSetP5Qyk8TdHtUNLmxcUrg5KysfD7RMxtLciR03IeddLZDSBg/viewform?fbclid=IwAR04CXs7uXHrPfHpTLrb9gqsZmzB9I4_EXmsqkA5El9QmySm89V5OTi9IBw"
  const imageLink = imageBaseUrl + "241741285-b9182938-0dd0-4560-8630-bb5233692a3f.jpg"
  return (
    <div className="popup-container">
      <div className="popup-body">

        <i class="fas fa fa-times fs-3 fw-light text-light btn close-popup"
          onClick={closePopup}
          style={{ zIndex: '1000' }}></i>
        <img className="img-fluid popup-img m-auto" src={imageLink} alt='Fret Music School' />
        <a target="blank" className="btn btn-warning px-4 py-3 register-btn" href={registerLink}>Click Here to Register Now</a>
      </div>
    </div>
  );
};

export default Popup;