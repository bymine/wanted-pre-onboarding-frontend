import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignInPage, SignUpPage } from './auth/pages';
import { TodoPage } from './Todo/pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
