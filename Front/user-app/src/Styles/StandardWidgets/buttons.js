import styled from "styled-components";

export const ButtonStandard = styled.button`
  border-radius: 1rem;
  border: none;
  padding: 5px 10px;
  margin: 0.3rem;

  &:hover:enabled {
    cursor: pointer;
    background: #828282;
  }
  &:focus:enabled {
    outline: none;
    border: 2px solid darkgray;
  }
  &:disabled {
    background: lightgray;
  }
`;

export const SubmitButton = styled(ButtonStandard)``;

export const CancelButton = styled(ButtonStandard)``;
