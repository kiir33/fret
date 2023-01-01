import React from 'react'

const MemberDetailDialog = ({ title, details, image, toggle }) => {
  return (
    <div>

      <div className="dialog-outer">

        <div className="d-flex bg-light rounded-3">
        <p className="h3 my-auto ms-2">{title}</p>
          <i class="fas fa fa-times fs-3 fw-light btn ms-auto" onClick={toggle}
            style={{ zIndex: '1000' }}></i>
        </div>

        <div className="dialog-inner">
          {/* <p className="h3 text-center">{title}</p> */}
          <div className="d-flex">
            <img className="dialog-img mx-auto mb-4" src={image} alt={title} /><br />
          </div>
          {details}
        </div>
      </div>
    </div>
  )
}

export default MemberDetailDialog
