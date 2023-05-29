import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
`;

export const LayoutContainer = styled.div`
  padding: 40px 40px 20px 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #581845;
  background-color: #daf7a6;
  box-shadow: 0px 2px 11px 2px rgba(88, 24, 69, 1);
  padding: 20px 0;
  margin: 0;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: #581845;
  font-size: 18px;
  font-weight: 500;
`;
