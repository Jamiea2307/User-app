import styled from "styled-components";
import { ButtonStandard } from "../Styles/StandardWidgets/buttons";

export const NavBarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.16);
  background: #fff;
  /* display: flex; */
  padding: 0.5rem;

  .userName {
    display: inline-block;
  }
`;

export const LogoutButton = styled(ButtonStandard)`
  /* justify-content: end; */
  float: right;
  margin: 0 2rem 0 0;
`;
