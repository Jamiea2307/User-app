import styled from "styled-components";

export const CreatePostContainer = styled.div`
  width: auto;
  padding: 1rem;

  @media (min-width: 768px) {
    border-radius: 0.5rem;
    background: #fff;
    border: 1px solid black;
  }

  .postTextArea {
    height: 5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border: 3px solid #cccccc;
    resize: vertical;
    overflow: auto;
    width: 100%;
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
