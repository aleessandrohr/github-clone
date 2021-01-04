import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Profile from './Profile/index';
import Repository from './Repository/index';

const Pages = () => {
  return(
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/:username" element={<Profile />} />
      <Route path="/:username/:repository" element={<Repository />} />
    </Routes>
  );
}

export default Pages;
