import { put, takeEvery, call } from 'redux-saga/effects';
import * as API from '../lib/api';
import { sagaActions } from './sagaAction';
import { AxiosResponse } from 'axios';
import { addPost, setPosts, editPost, removePost } from '../../src/slices/post';
import { setFormSlice } from '../../src/slices/form';
import { updatePostProps, Post } from 'src/interface';
import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// post 데이터 가져오기
export function* getPostsSaga() {
  try {
    const result: AxiosResponse = yield call(API.getPosts);
    yield put(setPosts(result.data));
  } catch (e) {
    yield console.log(e);
  }
}

//  post 데이터 생성하기
export function* createPostSaga({ payload }: PayloadAction<Post>) {
  try {
    const response: AxiosResponse = yield call(API.createPost, payload);
    if (response != null && (response.status == 201 || response.status == 200)) {
      yield put(addPost(response.data));
      yield toast.success('후기를 작성했습니다.', {
        autoClose: 1000
      });
    }
  } catch (e) {
    yield console.log(e);
    yield toast.error('문제가 발생했습니다. 다시 시도해주세요.', {
      autoClose: 1000
    });
  }
}

// post 데이터 수정하기
export function* updatePostSaga({ payload }: PayloadAction<updatePostProps>) {
  try {
    const response: AxiosResponse = yield call(API.updatePost, payload);
    if (response != null && (response.status == 201 || response.status == 200)) {
      yield put(editPost(response.data));
      yield toast.success('후기를 수정했습니다.', {
        autoClose: 1000
      });
    }
  } catch (e) {
    yield console.log(e);
    yield toast.error('문제가 발생했습니다. 다시 시도해주세요.', {
      autoClose: 1000
    });
  }
}

// post 데이터 삭제하기
export function* removePostSaga({ payload: id }: PayloadAction<number>) {
  try {
    const response: AxiosResponse = yield call(API.deletePost, id);
    if (response.status == 200) {
      yield put(removePost({ id }));
      yield toast.success('후기를 삭제하였습니다.', {
        autoClose: 1000
      });
    }
  } catch (e) {
    yield console.log(e);
    yield toast.error('문제가 발생했습니다. 다시 시도해주세요.', {
      autoClose: 1000
    });
  }
}

// form 리셋
export function* resetFormSaga() {
  try {
    yield put(setFormSlice({ id: 0, user: '', title: '', body: '', date: '' }));
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
  yield takeEvery(sagaActions.DELETE_POST, removePostSaga);
  // 'RESET_FORM' 액션 dispatch 시 form 리셋
  yield takeEvery(sagaActions.RESET_FORM, resetFormSaga);
}
