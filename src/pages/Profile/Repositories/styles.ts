import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Repositories2 = styled.div`
  margin-top: var(--verticalPadding);

  > div {
    margin-top: 8px;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;
