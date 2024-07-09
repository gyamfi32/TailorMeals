import React, { useState } from "react";
import { saveUserProfile } from "../../API/ProfileApi";




const HealthProfileForm = () => {
  const [formData, setFormData] = useState({
    healthConditions: [],
    dietaryPreferences: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveUserProfile(formData);
      alert("Profile updated successfully");
    } catch (error) {
    // Save formData to the backend or local storage here
    console.error("Error saving profile:", error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="healthConditions">Health Conditions</label>
        <input
          type="text"
          className="form-control"
          id="healthConditions"
          name="healthConditions"
          value={formData.healthConditions}
          onChange={handleChange}
          placeholder="Enter your health conditions"
        />
      </div>
      <div className="form-group">
        <label htmlFor="dietaryPreferences">Dietary Preferences</label>
        <input
          type="text"
          className="form-control"
          id="dietaryPreferences"
          name="dietaryPreferences"
          value={formData.dietaryPreferences}
          onChange={handleChange}
          placeholder="Enter your dietary preferences"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
    
  );
};

export default HealthProfileForm;
