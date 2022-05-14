import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post, updatePostProps } from '../interface';

// rtk query로 변경 필요. getPosts, getData는 Query로 변경 / createPost, updatePost는 mutation 적용
export const BASE_URL = 'http://localhost:3000';

// Define a service using a base URL and expected endpoints
export const getPostApi = createApi({
  reducerPath: 'getPostApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post, string>({
      query: (query) => (query ? `post/${query}` : `post/?_sort=id&_order=DESC&_limit=100`)
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `post/${id}`
    })
  })
});

export const createPost = ({ title, body, user, date }: Post) =>
  axios.post(`${BASE_URL}/post`, { title, body, user, date });

export const getPosts = () => axios.get(`${BASE_URL}/post/?_sort=id&_order=DESC&_limit=100`); // 역순으로 최근 작성된 포스트 20개를 불러온다.

export const updatePost = ({ id, post: { title, body, user, date } }: updatePostProps) =>
  axios.put(`${BASE_URL}/post/${id}`, { title, body, user, date }); // 포스트를 업데이트한다

export const deletePost = (id: number) => axios.delete(`${BASE_URL}/post/${id}`); // 포스트를 제거한다

export const { useGetPostsQuery, useGetPostQuery } = getPostApi;
