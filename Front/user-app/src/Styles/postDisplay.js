import styled from "styled-components";

export const DisplayContainer = styled.div`
  margin-top: 1rem;

  @media (min-width: 768px) {
    /* margin-top: 1rem; */
  }
`;

export const PostContainer = styled.div`
  padding: 1rem;
  background: #fff;
  margin: 0.25rem 0px;

  @media (min-width: 768px) {
    margin: 1.5rem 1rem;
    background: #fff;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 0 1px 3px rgb(0 0 0 / 16%), 0 1px 5px rgb(0 0 0 / 23%);
  }

  .postDetailContainer {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }

  .postUserLink {
    text-decoration: none;
    color: black;
  }

  .postText {
    word-break: break-word;
    text-decoration: none;
    color: black;
  }
`;
