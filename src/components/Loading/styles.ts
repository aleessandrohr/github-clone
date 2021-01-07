import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const Spin = styled.div`
  width: 3rem;
  height: 3rem;
  border: 8px solid var(--black);
  border-left-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
