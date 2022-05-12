import React, { useRef, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormSlice } from '../../reducers/form';
import { addPost, createPost } from '../../reducers/post';
import dayjs from 'dayjs';
import { RootState, AppDispatch } from '../../../src/store';

const PostNew: React.FC = () => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    window.scrollTo(0, 0);
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const navigate = useNavigate();

  const form = useSelector((state: RootState) => state.form);
  const dispatch: AppDispatch = useDispatch();
  const handleChange =
    (prop: string) =>
    (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(setFormSlice({ ...form, [prop]: event.target.value }));
    };

  const handleSubmit = async () => {
    form.id === 0 &&
      (await dispatch(
        addPost({
          user: form.user,
          title: form.title,
          body: form.body,
          date: dayjs().format('YYYY-MM-DD')
        })
      ),
      await dispatch(
        createPost({
          user: form.user,
          title: form.title,
          body: form.body,
          date: dayjs().format('YYYY-MM-DD')
        })
      ));
    await dispatch(
      setFormSlice({
        id: 0,
        user: '',
        title: '',
        body: '',
        date: ''
      })
    );
    navigate('/', { replace: true });
  };

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
                <Input
                  placeholder="사용자 이름을 입력해 주세요"
                  ref={inputRef}
                  onChange={handleChange('user')}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="label">제목</Label>
                <Input placeholder="제목을 입력해 주세요" onChange={handleChange('title')} />
              </FormGroup>
              <FormGroup>
                <Label>내용</Label>
                <TextArea placeholder="내용을 입력해 주세요" onChange={handleChange('body')} />
              </FormGroup>
              <SubmitBox>
                <SubmitButton onClick={() => handleSubmit()}>제출하기</SubmitButton>
              </SubmitBox>
            </FormBox>
          </FormDiv>
        </PaddingContainer>
      </Container>
    </div>
  );
};

export default PostNew;
