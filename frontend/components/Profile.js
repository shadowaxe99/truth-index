import React, { useState } from 'react';

const Profile = () => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <label>
        Username:
        <input type='text' value={username} onChange={handleUsernameChange} />
      </label>
    </div>
  );
};

export default Profile;