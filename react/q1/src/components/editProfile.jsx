import { useState } from "react";

function EditProfile({ user, onSave }) {
  const [editDetails, setEditDetails] = useState(user);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save updated details
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    onSave(editDetails); // Call parent function to save changes
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={editDetails.name}
        onChange={handleChange}
        placeholder="Enter Name"
      />
      <input
        type="email"
        name="email"
        value={editDetails.email}
        onChange={handleChange}
        placeholder="Enter Email"
      />
      <textarea
        name="bio"
        value={editDetails.bio}
        onChange={handleChange}
        placeholder="Enter Bio"
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditProfile;
