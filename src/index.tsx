import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './commons/globalstyles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
