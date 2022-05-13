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
5. RTK Query 적용

## 주요 기능별 설명

### 1) 게시글 생성

### 2) 게시글 수정

### 3) 게시글 삭제

### 4) 게시글 가져오기

## 파일별 설명

### src/

<table>
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>`src/store.ts`</td>
         <td> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</td>
      </tr>
      <tr>
         <td>`src/App.tsx`</td>
         <td> </td>
      </tr>
      <tr>
         <td>`src/index.tsx`</td>
         <td> </td>
      </tr>
      <tr>
         <td>`src/index.html`</td>
         <td> </td>
      </tr>
   </tbody>
</table>

### src/components

<table>
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>`components/Button/index.tsx`</td>
         <td> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</td>
      </tr>
      <tr>
         <td>`components/List/index.tsx`</td>
         <td> </td>
      </tr>
      <tr>
         <td>`components/Navbar/index.tsx`</td>
         <td> </td>
      </tr>
      <tr>
        <td>`components/.../styles.tsx`</td>
         <td> </td>
      </tr>
   </tbody>
</table>

### src/interface

<table>
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>`interface/index.tsx`</td>
         <td> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</td>
      </tr>
   </tbody>
</table>

### src/lib

<table>
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>`lib/api.ts`</td>
         <td> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</td>
      </tr>
   </tbody>
</table>

### src/pages

<table>
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>`pages/show.tsx`, `pages/new.tsx`, `pages/edit.tsx`</td>
         <td> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</td>
      </tr>
      <tr>
         <td>`pages/styles.tsx`</td>
         <td> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</td>
      </tr>
   </tbody>
</table>

### src/sagas

<table>
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>`sagas/saga.ts`</td>
         <td> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</td>
      </tr>
      <tr>
         <td>`sagas/sagaAction.ts`</td>
         <td> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</td>
      </tr>
   </tbody>
</table>

### src/slices

<table>
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>`slices/form.ts`</td>
         <td> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</td>
      </tr>
      <tr>
         <td>`slices/post.ts`</td>
         <td> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</td>
      </tr>
   </tbody>
</table>

### src/styles

<table>
   <tbody>
      <tr>
         <th>파일</th>
         <th>설명</th>
      </tr>
      <tr>
         <td>`styles/global.ts`</td>
         <td> 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다.</td>
      </tr>
   </tbody>
</table>

## 사진 첨부

#### PC 버전

<table >
  <thead>
    <tr>
      <th style="text-align: center">메인 리스트</th>
      <th style="text-align: center">후기 작성 폼</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> 
        <img src="https://user-images.githubusercontent.com/38210233/168334232-11a7a4dd-5f58-4eb6-86d9-f0e0cf8acb4e.png"  alt="finda pc main" >
      </td>
       <td>
        <img src="https://user-images.githubusercontent.com/38210233/168334295-9b77eaf6-ba1f-418b-9dfe-437de10b131a.png" alt="finda pc new">
      </td>
    </tr> 
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th style="text-align: center">상세 페이지</th>
      <th style="text-align: center">후기 수정 폼</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> <img src="https://user-images.githubusercontent.com/38210233/168334351-266bae18-a513-466d-8f61-2d13a71cd604.png"  alt="finda pc show" ></td>
       <td><img src="https://user-images.githubusercontent.com/38210233/168334418-9e130916-3265-4e03-9e96-3ebcc8f3a883.png" alt="finda pc edit"></td>
    </tr> 
  </tbody>
</table>
<table>
  <thead>
    <tr>
      <th style="text-align: center">후기 수정</th>
      <th style="text-align: center">후기 삭제</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> <img src="https://user-images.githubusercontent.com/38210233/168334538-ba43b49a-a079-43f0-9aca-4b567af2ae6d.png"  alt="finda pc update" ></td>
       <td><img src="https://user-images.githubusercontent.com/38210233/168334580-02f77fd5-3ac2-4d38-8c86-f6e9c94ab840.png" alt="finda pc remove"></td>
    </tr> 
  </tbody>
</table>

#### 모바일 버전

<table>
  <tr>
    <td> <img src="https://user-images.githubusercontent.com/38210233/168335076-57470cd2-8dbd-41a6-9446-df3a42866e36.png"  alt="finda mobile main" width="300" ></td>
    <td><img src="https://user-images.githubusercontent.com/38210233/168335171-a351a6ff-6013-4a76-be40-2f6e714d0de7.png" alt="finda mobile show"  width="300" ></td>
    <td><img src="https://user-images.githubusercontent.com/38210233/168335211-9ed89cf5-8c32-4f86-bb1f-4308b1409393.png" alt="finda mobile edit"  width="300" ></td>
  </tr> 
  <tr>
    <td> <img src="https://user-images.githubusercontent.com/38210233/168335255-e70717ce-a24b-42a1-a3e9-3377c804134c.png"  alt="finda mobile new" width="300" ></td>
    <td><img src="https://user-images.githubusercontent.com/38210233/168335292-56a4060e-5a55-4448-806f-61700bee6a49.png" alt="finda mobile create"  width="300" ></td>
    <td><img src="https://user-images.githubusercontent.com/38210233/168335361-116537d6-5ac9-4ed6-b606-d056cf6cbd97.png" alt="finda mobile remove"  width="300" ></td>
  </tr> 
</table>

## 개선해야 할 점

## 참고 문서

- [redux 게시판 만들기](https://mjn5027.tistory.com/35)
- [React-router-dom 프로젝트 참고](https://github.com/LeeMir/react-cookie-board)
- [redux 공식 도큐](https://redux-toolkit.js.org/tutorials/quick-start)
- [React-router-dom 설명](https://velog.io/@swanious/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0-%EC%A0%81%EC%9A%A9)
- [Redux-saga 튜토리얼](https://mskims.github.io/redux-saga-in-korean/introduction/BeginnerTutorial.html)
- [redux toolkit crud example](https://www.bezkoder.com/redux-toolkit-example-crud/)
- [Json-server 이해하기](https://redux-advanced.vlpt.us/3/01.html)
- [Redux-Saga 설명 영상 (FE Conference, Toss)](https://www.youtube.com/watch?v=UxpREAHZ7Ck)
- [Redux toolkit 사내 도큐](https://findainc.atlassian.net/wiki/spaces/FF/pages/2689302595/Redux+Toolkit)
- [Redux saga 사내 도큐](https://findainc.atlassian.net/wiki/spaces/FF/pages/2757230660/redux-saga+tutorial)
- [Redux toolkit + redux saga](https://blog.logrocket.com/smarter-redux-redux-toolkit/)
- [리액트 Saga + Toolkit](https://mjn5027.tistory.com/39)
- [rtk Query 문서](https://junsangyu.gitbook.io/rtk-query/)
