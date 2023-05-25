import React from "react";

const Popup = ({ closePopup }) => {
  const registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSetP5Qyk8TdHtUNLmxcUrg5KysfD7RMxtLciR03IeddLZDSBg/viewform?fbclid=IwAR04CXs7uXHrPfHpTLrb9gqsZmzB9I4_EXmsqkA5El9QmySm89V5OTi9IBw"
  return (
    <div className="popup-container">
      <div className="popup-body">

        <i class="fas fa fa-times fs-3 fw-light text-light btn close-popup"
          onClick={closePopup}
          style={{ zIndex: '1000' }}></i>
        <img className="img-fluid popup-img m-auto"
          src='https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/348814788_1463089901128518_2976346483811828274_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KJjHV1np68gAX-TEeN5&_nc_ht=scontent.fktm7-1.fna&oh=00_AfAsT5L9667B00OC66bjX6uEiTCT2fmwOWwUulfe8PCIvw&oe=647402E6'
          alt='Fret Music School' />
          <a target="blank" className="btn btn-warning px-4 py-3 register-btn" href={registerLink}>Click Here to Register Now</a>
      </div>
    </div>
  );
};

export default Popup;