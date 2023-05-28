import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 0 0 30px;
`;

export const RestItem = styled.li`
  margin-bottom: 30px;
`;

export const StyledLink = styled(NavLink)`
  border: 1px solid #c3d1c0;
  box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.5);
  background-color: rgba(188, 237, 66, 0.5);
  text-align: center;
  font-size: 18px;
  padding: 6px 20px;
  &.active {
    padding: 8px 16px;
    color: white;
    background-color: #581845;
    border-radius: 4px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #c3d1c0;
  box-shadow: 3px 3px 8px -1px rgba(0, 0, 0, 0.5);
  background-color: rgba(188, 237, 66, 0.5);
  width: 200px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
`;
