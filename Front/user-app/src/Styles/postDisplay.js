import styled from "styled-components";

export const DisplayContainer = styled.div`
  margin-top: 1rem;

  @media (min-width: 768px) {
    /* border: 1px solid black; */
    margin-top: 1rem;
    /* background: #fff; */
  }
`;

export const PostContainer = styled.div`
  border-top: 1px solid black;
  padding: 1rem;

  @media (min-width: 768px) {
    margin: 1.5rem 1rem;
    background: #fff;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 0 1px 3px rgb(0 0 0 / 16%), 0 1px 5px rgb(0 0 0 / 23%);
  }

  .postText {
    word-break: break-word;
  }
`;
