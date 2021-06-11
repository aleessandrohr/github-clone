import styled from "styled-components";

export const Container = styled.div``;

export const Repositories = styled.div`
  margin-top: var(--verticalPadding);

  > h1 {
    font-size: 1rem;
    font-weight: normal;
  }

  > div {
    margin-top: 8px;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const CalendarHeading = styled.span`
  font-size: 1rem;
  margin: 36px 0 9px;
  display: inline-flex;
`;
