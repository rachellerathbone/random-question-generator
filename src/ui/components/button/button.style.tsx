import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: var(--primary-color);
  border: 0;
  border-radius: var(--border-radius);
  bottom: 5em;
  color: #ffffff;
  font-size: 1.4rem;
  padding: 0.5em;
  position: absolute;
  width: 12em;

  &:hover {
    background: var(--secondary-color);
    cursor: pointer;
  }
}
`;
