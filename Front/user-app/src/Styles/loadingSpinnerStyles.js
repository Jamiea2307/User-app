import styled from "styled-components";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;

  .div {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  div:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default SpinnerContainer;
