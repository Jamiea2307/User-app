import styled from "styled-components";
import { ButtonStandard } from "../Styles/StandardWidgets/buttons";

export const NavBarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  height: 3rem;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.16);
  background: #fff;

  .userName {
    /* display: inline; */
  }
`;

export const LogoutButton = styled(ButtonStandard)`
  /* justify-content: end; */
`;
