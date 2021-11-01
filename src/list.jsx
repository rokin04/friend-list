import React from "react";
import styled from "styled-components";

const ListStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  box-shadow: 2px 2px 6px -2px;
`;

const NameStyled = styled.div`
  font-weight: bold;
  position: relative;
  left: 10px;
`;

export const List = ({ name }) => {
  return (
    <ListStyled>
      <NameStyled>{name}</NameStyled>
    </ListStyled>
  );
};
