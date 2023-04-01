import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './auth/contexts/AuthProvider';
import GlobalStyle from './commons/globalstyles/GlobalStyles';
import { TodoProvider } from './Todo/contexts/TodoProvider';
import { LocalTokenRepository } from './commons/repositorys/LocalTokenRepository';

export const localTokenRepository = new LocalTokenRepository();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <TodoProvider>
      <GlobalStyle />
      <App />
    </TodoProvider>
  </AuthProvider>,
);
