import 'react-calendar-heatmap/dist/styles.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { ThemeName, themes } from './styles/Themes';

import Header from './components/Header/index';
import Routes from './pages/routes';
import Footer from './components/Footer/index';

// import { Container } from './styles';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {

  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return(
    <ThemeProvider theme={currentTheme}>
      <Router>

        <Header themeName={themeName} setThemeName={setThemeName} />

        <Routes />

        <Footer />

        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
}

export default App;
