import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/index';
import Routes from './pages/routes';
//import Footer from './components/Footer/index';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes />

      {/*<Footer />*/}
    </Router>
  );
}

export default App;
