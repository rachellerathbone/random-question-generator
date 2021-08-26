import * as React from 'react';
import { BannerContainer, BannerMessage } from './banner.style';

export interface BannerProps {
  children?: React.ReactNode;
}

export const Banner = (props: BannerProps): JSX.Element => {
  return (
    <BannerContainer>
      <BannerMessage>{props.children}</BannerMessage>
    </BannerContainer>
  );
};
