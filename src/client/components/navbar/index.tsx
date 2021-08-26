import * as React from 'react';
import { globalCopy } from '../../../common/copy/uiCopy';
import { LogoIcon } from '../icons/logo';
import {
  Brand,
  NavbarContainer,
  NoAwksBrandName,
} from './navbarContainer.style';

export const Navbar = (): JSX.Element => {
  return (
    <NavbarContainer>
      <Brand>
        <LogoIcon /> <NoAwksBrandName>{globalCopy.brandName}</NoAwksBrandName>
      </Brand>
    </NavbarContainer>
  );
};
