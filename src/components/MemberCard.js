import React from 'react'
import Truncate from 'react-truncate'
const MemberCard = ({ image, title, details, pos, toggle }) => {
  return (
    <div className="card bg-body shadow col-4 my-4 mx-auto p-0" style={{ width: '18rem' }}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <p className="card-title h5 text-center mb-2">{title}</p>
        <p className="text-justify fw-light">
          <Truncate lines={5} ellipsis={<span>...
            <a className="btn p-0 ps-2 text-primary fw-light fs-6"
              onClick={() => (toggle(pos)) } >Read more</a></span>}>
            {details}
          </Truncate>
        </p>
      </div>
    </div>
  )
}

export default MemberCard