import styled from "styled-components";

export const UserFormBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  max-width: 450px;
  padding: 40px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: #fff;

  @media only screen and (max-device-width: 676px) {
    border-radius: 0%;
    height: 100%;
    width: 100%;
    max-width: none;
  }

  h2 {
    margin: 0 0 5rem;
    padding: 0;
    text-align: center;
    font-size: 3rem;
  }

  .pageLink {
    font-size: 12px;
    color: #21595c;
    float: right;
  }

  .errorMessage {
    font-size: 12px;
    color: red;
    display: block;
    margin-bottom: 20px;
  }
`;

export const SubmitBox = styled.input`
  padding: 10px 20px;
  color: #21595c;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  letter-spacing: 4px;
  border: 2px solid #21595c;

  &:hover {
    cursor: pointer;
    background: #21595c;
    color: #fff;
    border: 2px solid white;
  }

  &:active {
    cursor: pointer;
    background: #fff;
    color: #21595c;
    border: 2px solid white;
  }
`;

export const UserBox = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 1rem 0;
    font-size: 16px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid;
    outline: none;
    background: transparent;
  }

  label {
    position: absolute;
    pointer-events: none;
    top: -20px;
    left: 0;
    font-size: 12px;
  }
`;
