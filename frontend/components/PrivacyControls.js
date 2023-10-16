import React, { useState } from 'react';

const PrivacyControls = () => {
  const [privacySetting, setPrivacySetting] = useState('');

  const handlePrivacyChange = (event) => {
    setPrivacySetting(event.target.value);
  };

  return (
    <div>
      <h2>Privacy Controls</h2>
      <select value={privacySetting} onChange={handlePrivacyChange}>
        <option value=''>--Please choose an option--</option>
        <option value='public'>Public</option>
        <option value='private'>Private</option>
      </select>
    </div>
  );
};

export default PrivacyControls;