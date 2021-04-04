import styled from "styled-components";

const ButtonStandard = styled.button`
  border-radius: 1rem;
  border: none;
  margin: 0.3rem;
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border: 2px solid darkgray;
  }
`;

export const SubmitButton = styled(ButtonStandard)``;

export const CancelButton = styled(ButtonStandard)``;
