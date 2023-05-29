import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
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
  font-size: 18px;
`;
