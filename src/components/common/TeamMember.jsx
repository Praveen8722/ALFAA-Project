import React from 'react';
import './common.css';

const TeamMember = ({ members }) => {
  return (
    <div className="container">
      <div className="row">
        {members.map((member, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 animated tpfadeUp py-5" key={index}>
            <div className="team-wrapper">
              <div className="team-item text-center">
                <div className="team-image">
                  <img src={member.src} alt={member.name} />
                </div>
                <div className="team-content">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
