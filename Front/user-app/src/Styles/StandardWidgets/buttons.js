import styled from "styled-components";

export const ButtonStandard = styled.button`
  border-radius: 1rem;
  border: none;
  padding: 5px 10px;
  margin: 0.3rem;

  &:hover {
    cursor: pointer;
    background: #828282;
  }
  &:focus {
    outline: none;
    border: 2px solid darkgray;
  }
`;

export const SubmitButton = styled(ButtonStandard)``;

export const CancelButton = styled(ButtonStandard)``;
