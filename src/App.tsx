import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';

import Header from './components/Header/index';
import Routes from './pages/routes';
//import Footer from './components/Footer/index';

// import { Container } from './styles';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return(
    <Router>

      <Header />

      <Routes />

      {/*<Footer /> */}

      <GlobalStyles />

    </Router>
  );
}

export default App;
