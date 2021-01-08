import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

const iconCSS = css`
  width: 1rem;
  height: 1rem;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 6px;
`;

export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      margin-left: 8px;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      color: var(--link);

      &:focus, &:hover {
        text-decoration: underline;
      }
    }
  }

  >section {
    >p {
      margin: 8px 0 16px;
      font-size: 0.8rem;
      color: var(--gray);
      letter-spacing: 0.1px;
    }
  }
`;

export const RepositoryIcon = styled(RiBookMarkLine)`
 ${iconCSS}
`;

export const BotSide = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;
      margin-right: 16px;

      >span {
        margin-left: 5px;
        font-size: 0.8rem;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    flex-shrink: 0;

    &.other {
      background-color: var(--other-language);
    }

    &.javascript {
      background-color: var(--javascript);
    }

    &.typescript {
      background-color: var(--typescript);
    }

    &.python {
      background-color: var(--python);
    }

    &.html {
      background-color: var(--html);
    }

    &.css {
      background-color: var(--css);
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
 ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
 ${iconCSS}
`;
