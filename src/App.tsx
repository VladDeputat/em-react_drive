import React from 'react';
import LoginPage from './pages/LoginPage';
import FilesPage from './pages/FilesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './redux/hooks';
import { selectAuthenticated } from './redux/auth/authSelectors';

const App: React.FC = () => {
  // const isAuth = useAppSelector(selectAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/files" element={<FilesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
