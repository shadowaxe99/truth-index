import React from 'react';
import Filter from './Filter';
import PrivacyControls from './PrivacyControls';
import Profile from './Profile';
import Reporting from './Reporting';
import Review from './Review';

function App() {
  return (
    <div className='App'>
      <Filter />
      <PrivacyControls />
      <Profile />
      <Reporting />
      <Review />
    </div>
  );
}

export default App;