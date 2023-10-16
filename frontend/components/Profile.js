```javascript
import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    linkedAccounts: '',
    publicStances: ''
  });

  const handleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/profiles', profile)
      .then(res => {
        console.log(res.data);
        setProfile({
          name: '',
          linkedAccounts: '',
          publicStances: ''
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <form id="profileForm" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={profile.name} onChange={handleChange} required />
      </label>
      <label>
        Linked Accounts:
        <input type="text" name="linkedAccounts" value={profile.linkedAccounts} onChange={handleChange} required />
      </label>
      <label>
        Public Stances:
        <textarea name="publicStances" value={profile.publicStances} onChange={handleChange} required />
      </label>
      <button type="submit">Create Profile</button>
    </form>
  );
};

export default Profile;
```