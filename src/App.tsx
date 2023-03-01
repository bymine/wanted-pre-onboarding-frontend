import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/contexts/authContext";
import { SignInPage, SignUpPage } from "./auth/pages";
import { TodoPage } from "./Todo/pages";

function App() {
  const token = localStorage.getItem("token") ?? "";
  return (
    <div className="App">
      <AuthProvider token={token}>
        <BrowserRouter>
          <Routes>
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
