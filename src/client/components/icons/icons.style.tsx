import styled from 'styled-components';

export const LogoIconContainer = styled.span`
  background: var(--primary-color);
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.2em 0.5em;
  position: relative;
  border-radius: 0 0.25em 0.25em 0.25em;

  &::after {
    border: 0.37em solid transparent;
    border-right-color: var(--primary-color);
    border-top-color: var(--primary-color);
    content: '';
    position: absolute;
    right: 80%;
    top: 0%;
  }
`;
