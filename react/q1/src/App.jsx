import React, { useState } from "react";
import EditProfile from "./components/editProfile";
import UserProfile from "./components/userProfile";

function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Web Developer",
  });

  // Toggle Edit Mode
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  // Update user data
  const updateUserData = (updatedData) => {
    setUserData(updatedData); // Update parent state
    setIsEditMode(false); // Switch back to View Mode
  };

  return (
    <div>
      <button onClick={toggleEditMode}>
        {isEditMode ? "View Profile" : "Edit Profile"}
      </button>
      {isEditMode ? (
        <EditProfile user={userData} onSave={updateUserData} />
      ) : (
        <UserProfile user={userData} />
      )}
    </div>
  );
}

export default App;
