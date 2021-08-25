import styled from 'styled-components';

interface ButtonProps {
  main?: boolean;
  primary?: boolean;
}

export const ButtonContainer = styled.button`
  background: ${(props: ButtonProps): string =>
    props.primary ? 'var(--primary-color)' : '#fff'};
  border: 0;
  border: ${(props: ButtonProps): string =>
    props.primary ? '0' : '4px solid var(--primary-color)'};
  border-radius: var(--border-radius);
  bottom: 5em;
  color: #ffffff;
  color: ${(props: ButtonProps): string =>
    props.primary ? '#fff' : 'var(--primary-color)'};
  font-size: 1.4rem;
  padding: 0.5em;
  position: ${(props: ButtonProps): string => props.main && 'absolute'};
  width: ${(props: ButtonProps): string => props.main && '12em'};

  &:hover {
    background: ${(props: ButtonProps): string =>
      props.primary && 'var(--secondary-color)'};
    border: ${(props: ButtonProps): string =>
      !props.primary && '4px solid var(--secondary-color)'};
    color: ${(props: ButtonProps): string =>
      !props.primary && 'var(--secondary-color)'};
    cursor: pointer;
  }
}
`;
