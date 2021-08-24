import React from 'react';
import { ButtonContainer } from './button.style';

export interface ButtonProps {
  children?: React.ReactNode;
  label?: string;
  onClick?(event: React.MouseEvent): void;
}

export function Button(props: ButtonProps): JSX.Element {
  return (
    <ButtonContainer onClick={props.onClick}>
      {props.label || props.children}
    </ButtonContainer>
  );
}
