import styled from "styled-components";

export const CreatePostContainer = styled.div`
  width: auto;
  padding: 1rem;

  @media (min-width: 768px) {
    border-radius: 0.5rem;
    background: #fff;
    border: 1px solid black;
  }

  .postTitleArea {
    border: 3px solid #cccccc;
    resize: vertical;
    overflow: auto;
    width: 60%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 1rem;
  }

  .postTextArea {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: 5rem;
    border: 3px solid #cccccc;
    resize: vertical;
    overflow: auto;
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
  }
`;

export const CreatePostButton = styled.button`
  width: 100%;
  height: 2.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
  }
`;
