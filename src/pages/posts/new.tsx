import React from 'react';
import {
  Container,
  PaddingContainer,
  Title,
  FlexDiv,
  FormDiv,
  FormBox,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitBox,
  SubmitButton
} from './styles';

const PostNew: React.FC = () => {
  return (
    <div>
      <Container>
        <PaddingContainer>
          <FlexDiv>
            <Title>후기 작성</Title>
          </FlexDiv>
          <FormDiv>
            <FormBox>
              <FormGroup>
                <Label htmlFor="label">사용자</Label>
                <Input id="label" placeholder="사용자 이름을 입력해 주세요" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="label">제목</Label>
                <Input id="label" placeholder="제목을 입력해 주세요" />
              </FormGroup>
              <FormGroup>
                <Label>내용</Label>
                <TextArea placeholder="내용을 입력해 주세요" />
              </FormGroup>
              <SubmitBox>
                <SubmitButton>제출하기</SubmitButton>
              </SubmitBox>
            </FormBox>
          </FormDiv>
        </PaddingContainer>
      </Container>
    </div>
  );
};

export default PostNew;
