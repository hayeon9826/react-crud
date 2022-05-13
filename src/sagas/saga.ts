import { put, takeEvery, call } from 'redux-saga/effects';
import * as API from '../lib/api';
import { sagaActions } from './sagaAction';
import { AxiosResponse } from 'axios';
import { addPost, setPosts, editPost, removePost } from '../../src/slices/post';
import { updatePostProps, Post } from 'interface';
import { PayloadAction } from '@reduxjs/toolkit';

export function* getPostsSaga() {
  try {
    const result: AxiosResponse = yield call(API.getPosts);
    yield put(setPosts(result.data));
  } catch (e) {
    yield console.log(e);
  }
}

export function* getPostSaga() {
  try {
    const result: AxiosResponse = yield call(API.getPosts);
    yield put(setPosts(result.data));
  } catch (e) {
    yield console.log(e);
  }
}

export function* createPostSaga({ payload }: PayloadAction<Post>) {
  try {
    const response: AxiosResponse = yield call(API.createPost, payload);
    if (response != null && (response.status == 201 || response.status == 200)) {
      yield put(addPost(response.data));
    }
  } catch (e) {
    yield console.log(e);
  }
}

export function* updatePostSaga({ payload }: PayloadAction<updatePostProps>) {
  try {
    const response: AxiosResponse = yield call(API.updatePost, payload);
    if (response != null && (response.status == 201 || response.status == 200)) {
      yield put(editPost(response.data));
    }
  } catch (e) {
    yield console.log(e);
  }
}

export function* removeDataSaga({ payload: id }: PayloadAction<number>) {
  try {
    const response: AxiosResponse = yield call(API.deletePost, id);
    if (response.status == 200) {
      yield put(removePost(id));
    }
  } catch (e) {
    yield console.log(e);
  }
}

// 모든 Saga들을 한번에 시작하기 위한 단일 entry point
export default function* rootSaga() {
  // 'FETCH_POST' 액션 dispatch 시 post 데이터 가져오기
  yield takeEvery(sagaActions.FETCH_POSTS, getPostsSaga);
  // 'CREATE_POST' 액션 dispatch 시 post 데이터 생성
  yield takeEvery(sagaActions.CREATE_POST, createPostSaga);
  // 'UPDATE_POST' 액션 dispatch 시 post 데이터 수정
  yield takeEvery(sagaActions.UPDATE_POST, updatePostSaga);
  // 'DELETE_POST' 액션 dispatch 시 post 데이터 삭제
  yield takeEvery(sagaActions.DELETE_POST, removeDataSaga);
}
