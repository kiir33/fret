import React from 'react'

const MemberDetailDialog = ({ title, details, image, toggle }) => {
  return (
    <div>

      <div className="dialog-outer">

        <div className="d-flex">
          <i class="fas fa fa-times fs-3 fw-light btn ms-auto" onClick={toggle}
            style={{ zIndex: '1000' }}></i>
        </div>

        <div className="dialog-inner">
          {title}
          {details}
          {details}
        </div>
      </div>
    </div>
  )
}

export default MemberDetailDialog
