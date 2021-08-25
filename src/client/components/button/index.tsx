import React from 'react';
import { ButtonContainer } from './button.style';

export interface ButtonProps {
  children?: React.ReactNode;
  label?: string;
  onClick?(event: React.MouseEvent): void;
  main?: boolean;
  primary?: boolean;
}

export function Button(props: ButtonProps): JSX.Element {
  return (
    <ButtonContainer {...props}>
      {props.label || props.children}
    </ButtonContainer>
  );
}
