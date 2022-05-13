import { all, put, takeEvery, delay, call } from 'redux-saga/effects';
import * as API from '../lib/api';
import { sagaActions } from './sagaAction';
import { AxiosResponse } from 'axios';
import { addPost, setPosts, createPost } from '../../src/slices/post';

export function* getPosts() {
  try {
    const result: AxiosResponse = yield call(API.getPosts);
    yield put(setPosts(result.data));
  } catch (e) {
    yield put({ type: 'POST_FAILED' });
  }
}

// export function* createPost() {
//   try {
//     const result: AxiosResponse = yield createPost;
//     yield put(addPost(result.data));
//   } catch (e) {
//     yield put({ type: 'POST_FAILED' });
//   }
// }

export function* getPostsAsync() {
  yield console.log('incrementAsync!');
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// worker Saga: 비동기 증가 태스크를 수행할겁니다.
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

// watcher Saga: 각각의 INCREMENT_ASYNC 에 incrementAsync 태스크를 생성할겁니다.
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// 모든 Saga들을 한번에 시작하기 위한 단일 entry point 입니다.
export default function* rootSaga() {
  // 'FETCH_POST' 액션 dispatch 시 post 데이터 가져오기
  yield takeEvery(sagaActions.FETCH_POSTS, getPosts);
  // yield all([getPosts(), watchIncrementAsync()]);
}
