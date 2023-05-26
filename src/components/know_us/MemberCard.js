import React from 'react'
import Truncate from 'react-truncate'
import { imageBaseUrl } from "../../Links";

const MemberCard = ({ member, pos, toggle }) => {
  let title = member.name;
  let image = imageBaseUrl + member.image;
  return (
    <div className="col-md-4 col-sm-12 my-md-0 my-sm-2">
      <div className="card bg-body shadow">
        <img className="card-img-top card-member-img" src={image} alt={title} />
        <div className="card-body">
          <p className="card-title h5 text-center mb-2">{title}</p>
          <p className="fw-light">
            <Truncate lines={5} ellipsis={<span>...
              <i className="btn p-0 ps-2 text-primary fw-light fs-6"
                onClick={() => (toggle(pos))} >Read more</i></span>}>
              {member.details}
            </Truncate>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MemberCard;