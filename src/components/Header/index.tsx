import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GitHubLogo, Search } from './styles';

const Header: React.FC = () => {

  const [search, setSearch] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate(`${search.toLowerCase().trim()}`);
  }

  return(
    <Container>
      <GitHubLogo />
      <Search onSubmit={handleSubmit}>
        <input placeholder='Search or jump to' value={search} onChange={e => setSearch(e.currentTarget.value)}/>
      </Search>
    </Container>
  );
}

export default Header;
