import styled from "styled-components";

export const CreatePostContainer = styled.div`
  border: 1px solid black;
  border-radius: 0.5rem;
  width: auto;
  background: #fff;
  padding: 1rem;
`;

export const PostForm = styled.form``;

export const PostTextArea = styled.textarea`
  height: 5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border: 3px solid #cccccc;
  resize: vertical;
  overflow: auto;
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;
`;

export const CreatePostButton = styled.button``;
