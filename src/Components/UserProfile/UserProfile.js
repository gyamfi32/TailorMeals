import React from "react";
import HealthProfileForm from "../HealthProfile/HealthProfileForm";
import "./UserProfile.css"

const UserProfile = () => {
  return (
    <div className="container mt-4 profile-container">
      <div className="card bg-light text-center profile-card">
        <div className="card-body">
          <h1 className="card-title">User Profile</h1>
      <HealthProfileForm />
    </div>
    </div>
    </div>
  );
};

export default UserProfile;
