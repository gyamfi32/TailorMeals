export const saveUserProfile = async (profileData) => {
  // Simulate a call to a backend server
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Profile data saved:", profileData);
      resolve();
    }, 1000);
  });
};
