import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  flex-direction: column;

  > h1 {
    font-size: 5rem;
  }

  > div {
    
    > p {
      font-size: 2rem;
    }
  }
`;

