import styled from 'styled-components';

export const Container = styled.div`
  --horizontalPadding: 1rem;
  --verticalPadding: 1.6rem;

  padding: var(--verticalPadding) var(--horizontalPadding);
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Tab = styled.div`
  background-color: var(--primary);

  .content {
    display: flex;
    align-items: center;
    width: min-content;
    padding: 14px 16px;

    > a {
      text-decoration: none;
      color: var(--black);
    }

    .label {
      font-size: 0.85rem;
      padding: 0 7px;
      font-weight: 600;
    }
  }

  .line {
    display: flex;
    width: 200vw;
    border-bottom: 1px solid var(--border);
    margin-left: -50vw;
  }

  &.mobile {
    margin-top: var(--verticalPadding);

    @media (min-width: 768px) {
      display: none;
    }
  }

  &.desktop {
    display: none;

    @media (min-width: 768px) {
      display: unset;

      .wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 1280px;

        .offset {
          width: 25%;
          margin-right: var(--horizontalPadding);
        }
      }
    }
  }
`;
