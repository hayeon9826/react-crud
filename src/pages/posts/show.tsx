import React from 'react';
import {
  Container,
  PaddingContainer,
  Title,
  FlexDiv,
  PostDiv,
  PostCard,
  Date,
  PostTitle,
  PostBody,
  More
} from './styles';
import { Link } from 'react-router-dom';

const PostShow: React.FC = () => {
  return (
    <div>
      <Container>
        <PaddingContainer>
          <FlexDiv>
            <Title>후기 상세</Title>
          </FlexDiv>
          <PostDiv>
            <PostCard>
              <FlexDiv>
                <Title>이핀다</Title>
                <Date>2022-05-10</Date>
                <More>
                  <Link to={`/posts/edit/1`}>
                    <u>수정</u>
                  </Link>
                  ·<u>삭제</u>
                </More>
              </FlexDiv>
              <PostTitle>앱 사용 후기</PostTitle>
              <PostBody>
                2금융권 대출을 청산하고 1금융권으로 대출을 갈아탔습니다. 2금융권에 한번 대출을 받은
                뒤로 1금융권은 아예 한도자체가 없어 최대 18%고금리를 이용했었는데 광주은행 6%대로
                여러번의 대환대출 끝에 안착했습니다. 감사합니다. 2금융권 대출을 청산하고 1금융권으로
                대출을 갈아탔습니다. 2금융권에 한번 대출을 받은 뒤로 1금융권은 아예 한도자체가 없어
                최대 18%고금리를 이용했었는데 광주은행 6%대로 여러번의 대환대출 끝에 안착했습니다.
                감사합니다.
              </PostBody>
            </PostCard>
          </PostDiv>
        </PaddingContainer>
      </Container>
    </div>
  );
};

export default PostShow;
