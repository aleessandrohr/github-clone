import React from 'react';

import { Container, GitHubLogo, Search } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
      <GitHubLogo />
      <Search>
        <input placeholder="Search or jump to"/>
      </Search>
    </Container>
  );
}

export default Header;
