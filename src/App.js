import { useState } from "react";
import styled from "styled-components";
import { List } from "./list";

const ContainerStyled = styled.div`
  margin: 0 auto;
  top: 60px;
  display: flex;
  flex-direction: column;
  width: 400px;
  font-weight: bold;
  height: 400px;
`;

const ListContainerStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  box-sizing: border-box;
  background-color: #dbd8d8;
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 10px;
`;

const TextAreaStyled = styled.input`
  box-sizing: border-box;
  height: 40px;
  border: none;
  box-shadow: 2px 2px 6px -2px;
  :focus {
    outline: none;
  }
  padding-left: 10px;
`;

const SearchStyled = styled.input`
  margin-left: 10px;
  border: none;
  height: 25px;
  border-radius: 4px;
  padding-left: 10px;
  :focus {
    outline: none;
  }
`;

const App = () => {
  const [filterData, setFilterData] = useState();
  const [nameList, setNameList] = useState();

  const handleOnSearchChange = (e) => {
    setFilterData(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    console.log("enter");
  };

  return (
    <ContainerStyled>
      <Header>
        <div>Friends List</div>
        <SearchStyled onChange={handleOnSearchChange} placeholder="search" />
        <div>asc.</div>
        <div>dsc.</div>
      </Header>
      <TextAreaStyled
        onKeyDown={handleOnKeyDown}
        placeholder="enter your name"
      />
      <ListContainerStyled>
        <List name="rakesh1" />
        <List name="rakesh2" />
        <List name="rakesh3" />
        <List name="rakesh4" />
        <List name="rakesh5" />
      </ListContainerStyled>
    </ContainerStyled>
  );
};

export default App;
