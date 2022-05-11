import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Nav, Ul, Li, ListText, LogoText } from './styles';

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <LogoText>
            <Link to="/">finda</Link>
          </LogoText>
        </Li>
        <Li>
          <ListText>오토렌트·리스</ListText>
        </Li>
        <Li>
          <ListText>신용대출</ListText>
        </Li>
        <Li>
          <ListText>담보대출</ListText>
        </Li>
        <Li>
          <ListText>계산기</ListText>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
