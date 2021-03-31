import styled from "styled-components";

const CommentButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  color: grey;
  padding: 0;
`;

const Comment = () => {
  const addComment = () => {};

  return (
    <CommentButton
      onClick={(e) => {
        e.preventDefault();
        addComment();
      }}
    >
      Reply
    </CommentButton>
  );
};

export default Comment;
