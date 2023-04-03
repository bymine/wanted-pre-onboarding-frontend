# 원티드 프리온버딩 1주차 과제

# 📋 요구 사항

## 1. 로그인 / 회원가입

- Assignment 1

  - 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요

- Assignment 2

  - 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요

- Assignment 3

  - 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요

- Assignment 4

  - 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

### 2. TODO LIST

- Assignment 5

  - /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
  - 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
  - TODO의 완료 여부는 <input type="checkbox" />를 통해 표현해주세요
  - TODO는 <li> tag를 이용해 감싸주세요

- Assignment 6

  - 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
  - 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요

- Assignment 7

  - TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요

- Assignment 8

  - TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

- Assignment 9

  - 투두 리스트의 삭제 기능을 구현해주세요

- Assignment 10

  - 투두 리스트의 수정 기능을 구현해주세요

<br/>
<br/>

# 🎥 작동 화면

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

# 🕹️ 실행 방법

- 클라이언트 실행

  git clone 한 후, /(루트) 경로에서 아래 명령어를 실행합니다.

  ```
  cd client
  npm install
  npm start
  //http://localhost:3000
  ```

- :computer: 서버 실행

  [백엔드 코드](https://github.com/walking-sunset/selection-task)

  git clone 한 후, /(루트) 경로에서 아래 명령어를 실행합니다.

  ```
  cd server
  npm install
  npm start
  //http://localhost:8000
  ```

  <br/>
  <br/>

# 🔗 배포링크

[링크](https://wanted-pre-onboarding-frontend-20ru3edjk-bymine.vercel.app/signin)

  <br/>
  <br/>

# 📅 진행 기간

2023.2.3 ~ 2023.2.11

리팩토링 기간 2023.3.27 ~ 2023.4.2

<br/>
<br/>

# 🛠️ 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/TypeSCript-3178C6?style=for-the-badge&logo=TypeSCript&logoColor=black">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=black">
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=black">

<br/>
<br/>

# 📂 폴더 구조

```
📦src
 ┣ 📂auth
 ┃ ┣ 📂apis
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜FormField.tsx
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂contexts
 ┃ ┃ ┗ 📜AuthProvider.tsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜useAuth.ts
 ┃ ┃ ┣ 📜useInput.ts
 ┃ ┃ ┣ 📜usePasswordIcon.ts
 ┃ ┃ ┣ 📜useSignIn.ts
 ┃ ┃ ┗ 📜useSignUp.ts
 ┃ ┗ 📂pages
 ┃ ┃ ┣ 📂SignInPage
 ┃ ┃ ┃ ┗ 📜SignInPage.tsx
 ┃ ┃ ┣ 📂SignUpPage
 ┃ ┃ ┃ ┗ 📜SignUpPage.tsx
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜styles.ts
 ┣ 📂commons
 ┃ ┣ 📂apis
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜withAuth.tsx
 ┃ ┣ 📂constants
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂globalstyles
 ┃ ┃ ┗ 📜GlobalStyles.ts
 ┃ ┗ 📂repositorys
 ┃ ┃ ┗ 📜LocalTokenRepository.ts
 ┣ 📂Todo
 ┃ ┣ 📂apis
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜styles.ts
 ┃ ┃ ┗ 📜TodoField.tsx
 ┃ ┣ 📂contexts
 ┃ ┃ ┗ 📜TodoProvider.tsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜useTodo.ts
 ┃ ┃ ┗ 📜useTodoManager.ts
 ┃ ┗ 📂pages
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜styles.ts
 ┃ ┃ ┗ 📜TodoPage.tsx
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

# 🏆 개선 사항

## [문자열 상수화]

하드코딩을 피하고 상수를 활용해 가독성을 높였습니다.

```ts
// 에러메세지 상수화

export const ERROR_MESSAGE = {
  EMAIL_EMPTY_ERROR: 'Please enter a valid email',
  EMAIL_NOT_EXIST_ERROR: 'User does not exist',
  EMAIL_EXIST_ERROR: 'The same email already exists',
  PW_EMPTY_ERROR: 'Please enter at least 8 characters',
  PW_CONFIRM_ERROR: 'Please match password',
  PW_MATCH_ERROR: 'Password error',
} as const;
```

<br/>

## [custom hooks 사용]

컴포넌트에서 사용하는 공통적인 로직을 분리해 추상화하고 재사용하기 위해 사용하였습니다.

아래와 같이 공통 로직을 추상화하는 훅을 만들어 사용했습니다.

- `useAuth` : useContext hook를 사용하여 token을 전역적으로 관리하기 위한 로직

- `useTodo` : useContext hook를 사용하여 todo list를 전역적으로 관리하기 위한 로직

- `useInput` : input 값과 error 메시지를 관리하며, 입력값이 정규식에 맞는지 검증합니다.

- `useSignIn`, `useSignUp` : 로그인, 회원가입 폼에서 사용하는 로직

- `useTodoManager` : 투두 페이지에서 사용하는 로직

- `usePasswordIcon` : 비밀번호 보기/숨기기 기능 로직

<br/>

## [의존성 주입]

의존성 주입을 적용하여 모듈에서 직접적으로 의존성을 가지고 있지 않아 프로그램의 유연성을 높였습니다

```ts
interface LocalTokenInterface {
  save(token: string): void;
  get(): string | null;
  remove(): void;
}

export class LocalTokenRepository implements LocalTokenInterface {
  token_key: string;

  constructor() {
    this.token_key = process.env.REACT_APP_TOKEN_KEY ?? '';
  }

  save = (token: string) => localStorage.setItem(this.token_key, token);

  get = () => localStorage.getItem(this.token_key);

  remove = () => localStorage.removeItem(this.token_key);
}
```
