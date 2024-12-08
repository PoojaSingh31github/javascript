function UserProfile({ user }) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Bio: {user.bio}</p>
      </div>
    );
  }
 
export default UserProfile;