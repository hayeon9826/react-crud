import React, { useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import { useGetPostQuery } from '../../../src/lib/api';
import { deletePost } from '../../slices/post';
import { toast } from 'react-toastify';
import { AppDispatch } from 'src/store';

const PostShow: React.FC = () => {
  const params = useParams();

  const {
    data: post,
    isFetching,
    isLoading
  } = useGetPostQuery(parseInt(params.id!), {
    refetchOnMountOrArgChange: true,
    skip: !params.id
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      post && post.id !== 0 && (await dispatch(deletePost(post.id)));
      await toast.success('후기를 삭제하였습니다.', {
        autoClose: 1000
      });
      navigate('/', { replace: true });
    } catch (e) {
      await toast.error('문제가 발생했습니다. 다시 시도해주세요.', {
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
            {isFetching || isLoading ? (
              <PostCard>잠시만 기다려 주세요...</PostCard>
            ) : (
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
            )}
          </PostDiv>
        </PaddingContainer>
      </Container>
    </div>
  );
};

export default PostShow;
