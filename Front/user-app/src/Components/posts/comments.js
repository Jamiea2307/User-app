import { useState } from "react";
import styled from "styled-components";

const ReplyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  color: grey;
  padding: 0;
`;

const CommentArea = styled.form`
  border: 1px solid red;
  width: 30rem;
`;

const CommentTextArea = styled.textarea`
  height: 5rem;
  width: 25rem;
`;

const CommentControls = styled.div`
  display: flex;
`;

const CommentButton = styled.button`
  align-items: right;
`;

const Comment = () => {
  const [addComment, setAddComment] = useState(false);

  return addComment ? (
    <CommentArea>
      <CommentTextArea />
      <CommentControls>
        <CommentButton
          onClick={(e) => {
            e.preventDefault();
            setAddComment(false);
          }}
        >
          save
        </CommentButton>
      </CommentControls>
    </CommentArea>
  ) : (
    <ReplyButton
      onClick={(e) => {
        e.preventDefault();
        setAddComment(true);
      }}
    >
      Reply
    </ReplyButton>
  );
};

export default Comment;
