import React from 'react'
import { Nav, Ul, Li, ListText } from './styles'

const Navbar:React.FC = () => {
    return (
        <Nav>
            <Ul>
                <Li>
                    <h2>FINDA</h2>
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
    )
}

export default Navbar;