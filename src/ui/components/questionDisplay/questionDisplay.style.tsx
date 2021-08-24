import styled from 'styled-components';

export const QuestionDisplayContainer = styled.div`
  align-items: center;
  align-self: center;
  border: 10px solid var(--primary-color);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  height: 90%;
  margin-bottom: 3em;
  min-width: 750px;
  padding: 4em;
  position: relative;
  min-width: 300px;

  @media (min-width: 768px) {
    align-self: auto;
    min-width: 700px;
  }

  @media (min-width: 992px) {
    min-width: 800px;
  }
`;

export const QuestionDisplayHeader = styled.h1`
  font-size: 1.4rem;
  line-height: 1.4;
  max-width: 450px;
  text-align: center;
`;
