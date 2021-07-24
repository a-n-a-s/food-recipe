import styled from "styled-components";
export const Header = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px #555;
`;
export const AppName = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;
export const SearchName = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  width:30%;
`;