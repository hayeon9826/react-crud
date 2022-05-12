import React, { useState, useEffect, useRef } from 'react';
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
import { useParams } from 'react-router';
import axios from 'axios';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFormSlice } from '../../reducers/form';
import { updatePost, editPost } from '../../reducers/post';
import { RootState, AppDispatch } from '../../../src/store';
import { BASE_URL } from '../../../src/lib/api';

const PostEdit: React.FC = () => {
  const [post, setPost] = useState({
    id: 0,
    user: '',
    title: '',
    body: '',
    date: ''
  });
  const params = useParams();
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
    form.id !== 0 &&
      (await dispatch(
        editPost({
          id: post.id,
          user: form.user,
          title: form.title,
          body: form.body,
          date: dayjs().format('YYYY-MM-DD')
        })
      ),
      await dispatch(
        updatePost({
          id: post.id,
          post: {
            user: form.user,
            title: form.title,
            body: form.body,
            date: dayjs().format('YYYY-MM-DD')
          }
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
    navigate(`/posts/${post.id}`, { replace: true });
  };

  useEffect(() => {
    const fetch = async () => {
      // redux 사용해서 가져오기로 변경 필요
      const res = await axios({
        method: 'get',
        url: `${BASE_URL}/post/${params.id}`,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      });
      await setPost(res.data);
    };
    if (params.id) {
      fetch();
    }
  }, [params]);

  useEffect(() => {
    if (post.id) {
      dispatch(setFormSlice({ ...post }));
    }
  }, [post]);

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
                  defaultValue={post?.user}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="label">제목</Label>
                <Input
                  placeholder="제목을 입력해 주세요"
                  defaultValue={post?.title}
                  onChange={handleChange('title')}
                />
              </FormGroup>
              <FormGroup>
                <Label>내용</Label>
                <TextArea
                  placeholder="내용을 입력해 주세요"
                  defaultValue={post?.body}
                  onChange={handleChange('body')}
                />
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

export default PostEdit;
