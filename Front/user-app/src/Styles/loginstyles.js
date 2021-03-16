import styled from "styled-components";

export const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  max-width: 450px;
  padding: 40px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.borderColor};

  @media only screen and (max-device-width: 480px) {
    border-radius: 0%;
    height: 100%;
    width: 100%;
    max-width: none;
  }
`;

export const LoginTitle = styled.h2`
  margin: 0 0 5rem;
  padding: 0;
  text-align: center;
  font-size: 3rem;
`;

export const UserBox = styled.div`
  position: relative;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 1rem 0;
  font-size: 16px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.fontColor};
  outline: none;
  background: transparent;
`;

export const LoginLabel = styled.label`
  position: absolute;
  pointer-events: none;
  top: -20px;
  left: 0;
  font-size: 12px;
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
`;

export const RegisterLink = styled.a`
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  color: #21595c;
`;

export const LoginLink = styled.a`
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  color: #21595c;
`;

export const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
  display: block;
  margin-bottom: 20px;
`;
