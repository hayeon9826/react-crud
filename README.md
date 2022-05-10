## 프로젝트 설명
- react 게시판 프로젝트 (1단계 게시판 만들기)
- 참고: https://findainc.atlassian.net/wiki/spaces/FF/pages/2121170954/OnBoarding
---

## 사용 스택
---
- TypeScript 
- babel + webpack  + React 
- Redux + Redux-saga
- styled-components

## 로컬 실행
---

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

### 2)  프로젝트 빌드
아래 명령어 입력 시, build 폴더에 빌드된 파일 (bundle.js) 생성됨
``` 
yarn webpack
```


## 구현된 기능
---
1. Redux, Redux-Toolkit를 이용한 상태 관리
2. json-server를 이용한 mock 데이터 세팅
3. Redux-saga를 이용한 사이드 이펙트 관리
3. 게시글(후기) 생성 / 수정 / 삭제 기능 작업

## 파일별 설명
---

## 사진 첨부
---
#### PC 버전

---
#### 모바일 버전

