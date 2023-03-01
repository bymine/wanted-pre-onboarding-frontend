# 원티드 프리온보딩 프론트엔드 - 선발 과제

# :magnet: 목차

1. [요구 사항](#요구-사항)
2. [작동 화면](#작동-화면)
3. [실행 방법](#실행-방법)
4. [진행 기간](#진행-기간)
5. [기술 스택](#기술-스택)
6. [폴더 구조](#폴더-구조)
7. [개선 사항](#개선-사항)

<br/>
<br/>

# :clipboard: 요구 사항

## 1. 로그인 / 회원가입

- Assignment 1

  - [x] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - [x] 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요

- Assignment 2

  - [x] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요

- Assignment 3

  - [x] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요

- Assignment 4

  - [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

### 2. TODO LIST

- Assignment 5

  - [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
  - [x] 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
  - [x] TODO의 완료 여부는 <input type="checkbox" />를 통해 표현해주세요
  - [x] TODO는 <li> tag를 이용해 감싸주세요

- Assignment 6

  - [x] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
  - [x] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요

- Assignment 7

  - [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요

- Assignment 8

  - [x] TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

- Assignment 9

  - [x] 투두 리스트의 삭제 기능을 구현해주세요

- Assignment 10

  - [x] 투두 리스트의 수정 기능을 구현해주세요

<br/>
<br/>

# :movie_camera: 작동 화면

- 로그인 화면과 회원가입 화면

  ![wnated-pre-onboarding1](https://user-images.githubusercontent.com/71866185/218249208-1575862b-cdb9-4a27-b1c0-279fe02723d8.gif)

  <br/>
  <br/>

- 이메일과 비밀번호 유효성을 확인
  ![wnated-pre-onboarding2](https://user-images.githubusercontent.com/71866185/218249246-c49f0f33-a80d-4323-930b-ad424110dc6b.gif)

  <br/>
  <br/>

- 투두 리스트 화면
  ![wnated-pre-onboarding3](https://user-images.githubusercontent.com/71866185/218249318-f26a4bd9-3560-41e2-b4bf-556b5d0654a7.gif)

<br/>
<br/>

# 실행 방법

- 클라이언트 실행

  git clone 한 후, /(루트) 경로에서 아래 명령어를 실행합니다.

  ```
  cd client
  npm start
  //http://localhost:3000
  ```

- :computer: 서버 실행

  [백엔드 코드](https://github.com/walking-sunset/selection-task)

  git clone 한 후, /(루트) 경로에서 아래 명령어를 실행합니다.

  ```
  cd server
  npm start
  //http://localhost:8000
  ```

  <br/>
  <br/>

# :date: 진행 기간

2023.2.3 ~ 2023.2.11

리팩토링 기간 2023.2.20 ~ 2023.3.1

<br/>
<br/>

# :books: 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/TypeSCript-3178C6?style=for-the-badge&logo=TypeSCript&logoColor=black">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=black">
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=black">

<br/>
<br/>

# :open_file_folder: 폴더 구조

```
📦src
 ┣ 📂auth
 ┃ ┣ 📂apis
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜FormField.tsx
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂constants
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂contexts
 ┃ ┃ ┗ 📜authContext.tsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜useAuthForm.ts
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂SignInPage
 ┃ ┃ ┃ ┗ 📜SignInPage.tsx
 ┃ ┃ ┣ 📂SignUpPage
 ┃ ┃ ┃ ┗ 📜SignUpPage.tsx
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┗ 📂types
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂commons
 ┃ ┣ 📂apis
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜withAuth.tsx
 ┃ ┗ 📂globalstyles
 ┃ ┃ ┗ 📜GlobalStyles.ts
 ┣ 📂Todo
 ┃ ┣ 📂apis
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜styles.ts
 ┃ ┃ ┗ 📜TodoField.tsx
 ┃ ┣ 📂constants
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜useTodo.ts
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜styles.ts
 ┃ ┃ ┗ 📜TodoPage.tsx
 ┃ ┣ 📂reducers
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜todoReducer.ts
 ┃ ┗ 📂types
 ┃ ┃ ┗ 📜index.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```

## 기능에 따른 폴더 구조

| 폴더          | 용도                                                                 |
| ------------- | -------------------------------------------------------------------- |
| **`auth`**    | 공통적으로 인증 기능을 수행하는 signin 과 signup이 포함되어있습니다. |
| **`commons`** | 전역적으로 사용되는 컴포넌트 및 API 기능이 포함되어있습니다.         |
| **`todo`**    | 할 일 목록 페이지에서 사용되는 기능들을 포함하고있습니다.            |

<br/>
<br/>

# 개선 사항

## [타입스크립트 적용]

자바스크립트로 작성된 코드를 타입스크립트로 변환

타입스크립트 `any` 타입 없애기

<br/>
<br/>

## [styled-components 적용]

css 기반 스타일링을 styled-components 적용

클래스 이름을 지정할 필요가 없어 코드가 간결하고 가독성이 높아지는 효과가 있습니다.

<br/>
<br/>

## [기능에 따른 폴더 구조 변경]

협업 시 작업자가 해당 기능의 폴더에서만 작업할 수 있어 파일 찾기가 수월하고,

git 충돌이 줄어든다는 장점을 고려해 기능에 따른 폴더 구조로 변경 하였습니다.

<br/>
<br/>

## [custom hooks 사용]

컴포넌트에서 사용하는 공통적인 로직을 분리해서 추상화하고 재사용하기 위해 사용하였습니다.

아래와 같이 공통 로직을 추상화하는 훅을 만들어 사용했습니다.

`useAuthForm` : 각 인증 관련 페이지에서 중복되는 form 관련 로직

`useTodo` : todo 관련 로직

`useAuth` : 인증 관련 로직
