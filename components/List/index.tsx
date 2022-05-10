import React from 'react'
import Button from '../Button'
import { Container, PaddingContainer, Title, FlexDiv } from './styles'

const List:React.FC = () => {
    return(
    <Container>
        <PaddingContainer>
            <FlexDiv>
                <Title>전체 후기</Title>
                <Button />
            </FlexDiv>
        </PaddingContainer>
    </Container>
    )
}

export default List;