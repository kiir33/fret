import React from "react";
import MemberCard from "./MemberCard";
import members from "./MembersData";

const KnowUs = ({ toggle }) => {
  return (
    <div className="bg-light p-4 my-4 rounded">
      {/* <p className="h2 text-center">Know Us</p> */}

      <div className="row">
        {members.map((member, i) => (
          <MemberCard
            member={member}
            pos={i}
            toggle={toggle}
            key={member.id}
          />
        ))}
      </div>
    </div>
  );
};

export default KnowUs;
