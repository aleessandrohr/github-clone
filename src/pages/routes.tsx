import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Overview from './Overview/index';
import Repositories from './Repositories/index';
import Error404 from '../components/Error404/index';

// import { Container } from './styles';

const Pages: React.FC = () => {
  return(
    <Routes>
      <Route path='/' element={<Overview />} />
      <Route path='/:username' element={<Overview />} />
      <Route path='/:username/?tab=repositories' element={<Repositories />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

export default Pages;
