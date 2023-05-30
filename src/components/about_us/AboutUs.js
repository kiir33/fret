import React from "react";
import MemberCard from "./MemberCard";
import members from "./MembersData";

const AboutUs = ({ toggle }) => {
  return (
    <div className="rounded px-4 py-2">
      <p className="h2 text-center text-uppercase mt-4">We Are</p>

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

export default AboutUs;
