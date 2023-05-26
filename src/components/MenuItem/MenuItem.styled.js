import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: #581845;
  font-weight: 500;
  font-size: 18px;
  padding: 4px 20px;
  margin: 0 auto 16px;
  border-radius: 4px;
  transition: transform 300ms;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  margin-bottom: 20px;
`;
