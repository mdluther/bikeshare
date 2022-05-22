import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border-radius: 2px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;
