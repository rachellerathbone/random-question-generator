import styled from 'styled-components';

export const BannerContainer = styled.div`
  background-color: var(--secondary-color);
  color: #fff;
  letter-spacing: 1px;
  margin: 1em calc(50% - 50vw);
  margin-top: 0;
  padding: 1em;
  text-align: center;
`;

export const BannerMessage = styled.p`
  font-size: 0.9rem;
  margin: 0;

  @media (min-width: 567px) {
    font-size: 1rem;
  }
`;
