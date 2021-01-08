import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import  { ThemeName } from '../../styles/Themes';

import { Container, GitHubLogo, Search } from './styles';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({
  themeName,
  setThemeName,
}) => {

  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/${search.toLowerCase().trim()}`);
  }

  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light')
  }

  return(
    <Container>
      <GitHubLogo onClick={toggleTheme} />
      <div>
        <ul>
          <li>
            <Search onSubmit={handleSubmit}>
              <input placeholder='Search or jump to' value={search} onChange={e => setSearch(e.currentTarget.value)}/>
            </Search>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Header;
