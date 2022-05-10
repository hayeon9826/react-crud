import React from 'react'
import Button from '../Button'
import { Container, PaddingContainer, Title, FlexDiv, GridDiv, PostCard, Date, PostTitle, PostBody } from './styles'

const data = [
    {
        "id": 1,
        "user": "김핀다",
        "title": "후기입니다.",
        "body": "비대면으로 쉽게 대출 받을 수 있어서 너무나 기분이 좋았습니다~~~^^",
        "date": "2022-05-10"
    },
    {
        "id": 2,
        "user": "이핀다",
        "title": "앱 사용 후기",
        "body": "2금융권 대출을 청산하고 1금융권으로 대출을 갈아탔습니다. 2금융권에 한번 대출을 받은 뒤로 1금융권은 아예 한도자체가 없어 최대 18%고금리를 이용했었는데 광주은행 6%대로 여러번의 대환대출 끝에 안착했습니다. 감사합니다.",
        "date": "2022-05-10"
    },
    {
        "id": 3,
        "user": "박핀다",
        "title": "추천합니다.",
        "body": "급하게 필요한 자금을 빠르고 편리하게 받을 수 있어서 큰 도움이 되었습니다.",
        "date": "2022-05-10"
    }
]

const List:React.FC = () => {
    return(
    <Container>
        <PaddingContainer>
            <FlexDiv>
                <Title>전체 후기</Title>
                <Button />
            </FlexDiv>
            <GridDiv>
                {data && data.map((data) => (
                    <PostCard key={data.id}>
                        <FlexDiv>
                            <Title>{data.user}</Title>
                            <Date>{data.date}</Date>
                        </FlexDiv>
                        
                        <PostTitle>{data.title}</PostTitle>
                        <PostBody>{data.body}</PostBody>
                    </PostCard>
                ))}
            </GridDiv>
        </PaddingContainer>
    </Container>
    )
}

export default List;