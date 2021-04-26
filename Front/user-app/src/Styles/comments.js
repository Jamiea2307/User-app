import styled from "styled-components";

export const CommentButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  color: grey;
  padding: 0;
  margin-right: 0.5rem;
`;

export const CommentArea = styled.form`
  padding: 1rem;
  margin-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.16);
`;

export const CommentTextArea = styled.textarea`
  height: 5rem;
  width: 30rem;
  max-width: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const CommentControls = styled.div`
  display: flex;
`;

export const CommentWrapper = styled.div`
  padding-top: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.16);

  .commentGroup {
    padding-bottom: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.16);
  }
`;

export const SingleComment = styled.div`
  padding-left: 0.5rem;
  border-left: 1px solid rgba(0, 0, 0, 0.16);
  padding-top: 0.5rem;
`;
