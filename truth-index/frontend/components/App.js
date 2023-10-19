// frontend/components/App.js

// This file contains the main application component

import React from 'react';
import Filter from './Filter';
import PrivacyControls from './PrivacyControls';
import Profile from './Profile';
import Reporting from './Reporting';
import Review from './Review';
import Search from './Search';

const App = () => {
  return (
    <div>
      <h1>TrustIndex Platform</h1>
      <Filter />
      <PrivacyControls />
      <Profile />
      <Reporting />
      <Review />
      <Search />
    </div>
  );
};

export default App;