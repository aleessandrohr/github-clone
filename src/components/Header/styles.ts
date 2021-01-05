import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--header);
  padding: 0.8rem 0.6rem;
`;

export const GitHubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  cursor: pointer;
`;

export const Search = styled.form`
  padding-left: 1rem;
  width: 100%;

  > input {
    background-color: var(--search);
    width: 50%;
    outline: 0;
    padding: 0.5rem 0.8rem;
    border-radius: 5px;

    &:focus {
      width: 75%;
      background-color: var(--search-placeholder)
    }

    transition: width .2s ease-out, color .2s ease-out, background-color .2s ease-out;
  }

  @media (min-width: 768px) {
    >input {
      width: 20%;

      &:focus {
        width: 40%;
      }
    }
  }
`;

