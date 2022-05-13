import React, { useState, useEffect } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../../../src/lib/api';
import { deletePost } from '../../slices/post';
import { toast } from 'react-toastify';

const PostShow: React.FC = () => {
  const [post, setPost] = useState({
    id: 0,
    user: '',
    title: '',
    body: '',
    date: ''
  });
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetch = async () => {
      // rtk query 사용해서 가져오기로 변경 필요
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      post.id !== 0 && (await dispatch(deletePost(post.id)));
      await toast.success('후기를 삭제하였습니다.', {
        position: 'top-right',
        autoClose: 1000
      });
      navigate('/', { replace: true });
    } catch (e) {
      await toast.error('문제가 발생했습니다. 다시 시도해주세요.', {
        position: 'top-right',
        autoClose: 1000
      });
      navigate('/', { replace: true });
    }
  };
  return (
    <div>
      <Container>
        <PaddingContainer>
          <FlexDiv>
            <Title>후기 상세</Title>
          </FlexDiv>
          <PostDiv>
            <PostCard>
              {post ? (
                <>
                  <FlexDiv>
                    <Title>{post?.user}</Title>
                    <Date>{post?.date}</Date>
                    <More>
                      <Link to={`/posts/edit/${post?.id}`}>
                        <u>수정</u>
                      </Link>
                      ·<u onClick={() => handleDelete()}>삭제</u>
                    </More>
                  </FlexDiv>
                  <PostTitle>{post?.title}</PostTitle>
                  <PostBody>{post?.body}</PostBody>
                </>
              ) : (
                <>
                  <h2>후기가 없습니다. 다시 시도해주세요.</h2>
                </>
              )}
            </PostCard>
          </PostDiv>
        </PaddingContainer>
      </Container>
    </div>
  );
};

export default PostShow;
