import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 0.8rem 0.6rem;
`;

export const GitHubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;

export const Search = styled.form`
  padding-left: 1rem;
  width: 100%;

  input {
    outline: 0;
    background: var(--search);
    border-radius: 0.4rem;
    padding: 0.5rem 0.8rem;
    width: 50%;

    &:focus {
      width: 80%;
      background: var(--search-placeholder)
    }

    transition: width .2s ease-out, color .2s ease-out, background-color .2s ease-out;
  }

  @media(min-width: 768px) {
    input {
      width: 25%;

      &:focus {
        width: 50%;
      }
    }

  }
`;
