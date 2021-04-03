import styled from "styled-components";

export const ReplyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  color: grey;
  padding: 0;
`;

export const CommentArea = styled.form`
  padding: 1rem;
  width: 30rem;
`;

export const CommentTextArea = styled.textarea`
  height: 5rem;
  width: 25rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const CommentControls = styled.div`
  display: flex;
`;

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
    border: 2px solid red;
  }
`;

export const SubmitButton = styled(ButtonStandard)``;

export const CancelButton = styled(ButtonStandard)``;
