import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GitHubLogo = styled(FaGithub)`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  cursor: pointer;
  opacity: 0.8;
`;
