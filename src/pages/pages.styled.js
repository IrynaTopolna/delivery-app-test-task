import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 0;
  padding: 20px;
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
  width: 190px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Cover = styled.div`
  display: flex;
  gap: 60px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 200px;
  padding: 2px 6px;
  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Text2 = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #581845;
  box-shadow: 0px 2px 11px 2px rgba(88, 24, 69, 1);
  height: 60vh;
  padding: 20px;
  width: 240px;
`;

export const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #581845;
  box-shadow: 0px 2px 11px 2px rgba(88, 24, 69, 1);
  min-width: 880px;
`;

export const DivTotal = styled.div`
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  align-items: baseline;
  box-shadow: 0px -1px 11px 0px rgba(88, 24, 69, 1);
  padding: 20px;
  border-top: 1px solid #581845;
  background-color: #daf7a6;
`;

export const Total = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

export const Button = styled.button`
  color: white;
  background-color: #581845;
  font-weight: 500;
  font-size: 18px;
  padding: 4px 20px;
  border-radius: 4px;
  transition: transform 300ms;
  &:hover {
    transform: scale(1.1);
  }
`;
