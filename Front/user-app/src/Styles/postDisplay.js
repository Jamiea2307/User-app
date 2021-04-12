import styled from "styled-components";

export const DisplayContainer = styled.div`
  margin-top: 1rem;

  @media (min-width: 768px) {
    border: 1px solid black;
    margin-top: 1rem;
    background: #fff;
  }
`;

export const PostContainer = styled.div`
  border-top: 1px solid black;
  padding: 1rem;

  @media (min-width: 768px) {
    border-left: 1px solid black;
    margin: 1.5rem 1rem;
    padding: 1rem;
  }
  .postText {
    word-break: break-word;
  }
`;
