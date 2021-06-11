import { FaGithub } from "react-icons/fa";

import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  background-color: var(--header);
  padding: 0.8rem 0.6rem;

  > div {
    width: 100%;
  }
`;

export const GitHubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Search = styled.form`
  padding-left: 1rem;
  width: 100%;

  > input {
    background-color: var(--search);
    width: 100%;
    outline: 0;
    padding: 0.35rem 0.8rem;
    border-radius: 5px;

    &:focus {
      background-color: var(--search-placeholder);
    }

    transition: width 0.2s ease-out, color 0.2s ease-out,
      background-color 0.2s ease-out;
  }

  @media (min-width: 768px) {
    > input {
      width: 20%;

      &:focus {
        width: 40%;
      }
    }
  }
`;
