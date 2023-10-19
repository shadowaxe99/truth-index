// frontend/App.js

// This file contains the main application component

import React from 'react';
import Filter from './components/Filter';
import PrivacyControls from './components/PrivacyControls';
import Profile from './components/Profile';
import Reporting from './components/Reporting';
import Review from './components/Review';
import Search from './components/Search';

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