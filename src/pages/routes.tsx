import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Overview from './Overview/index';
import Repositories from './Repositories/index';

// import { Container } from './styles';

const Pages: React.FC = () => {
  return(
    <Routes>
      <Route path='/' element={<Overview />} />
      <Route path='/:username' element={<Overview />} />
      <Route path='/:username/?tab=repositories' element={<Repositories />} />
      {/*Route path='*' element={<>} />*/}
    </Routes>
  );
}

export default Pages;
