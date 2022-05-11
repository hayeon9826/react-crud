## 프로젝트 설명

- react 게시판 프로젝트 (1단계 게시판 만들기)
- 배포 링크: https://react-crud-finda.vercel.app/
- 참고: https://findainc.atlassian.net/wiki/spaces/FF/pages/2121170954/OnBoarding

## 사용 스택

- TypeScript
- babel + webpack + React
- Redux + Redux-saga + RTK Query
- styled-components
- json-server

## 로컬 실행

### 1) 프로젝트 실행

- 프론트
  클론 후, 아래 명령어 입력. localhost:8080 접속

```
yarn install
yarn start
```

- 아래 명령어로 json-server 실행. localhost:3000 포트에 REST API 서버가 실행됨

```
npx json-server --watch db.json
```

### 2) 프로젝트 빌드

아래 명령어 입력 시, build 폴더에 빌드된 파일 (bundle.js) 생성됨

```
yarn webpack
```

## 구현된 기능

1. Redux, Redux-Toolkit를 이용한 상태 관리
2. json-server를 이용한 mock 데이터 세팅
3. Redux-saga를 이용한 사이드 이펙트 관리
4. 게시글(후기) 생성 / 수정 / 삭제 기능 작업

## 파일별 설명

## 사진 첨부

#### PC 버전

#### 모바일 버전

## 참고 문서

- [redux 게시판 만들기](https://mjn5027.tistory.com/35)
- [React-router-dom 프로젝트 참고](https://github.com/LeeMir/react-cookie-board)
- [redux 공식 도큐](https://redux-toolkit.js.org/tutorials/quick-start)
- [React-router-dom 설명](https://velog.io/@swanious/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%A0%81%EC%9A%A9)
- [Redux-saga 튜토리얼](https://mskims.github.io/redux-saga-in-korean/introduction/BeginnerTutorial.html)
- [redux toolkit crud example](https://www.bezkoder.com/redux-toolkit-example-crud/)
- [Json-server 이해하기](https://redux-advanced.vlpt.us/3/01.html)
