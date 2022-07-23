import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home';
import Wall from './pages/Wall';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PostPage from './pages/PostPage';
import ModifyPage from './pages/ModifyPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/wall' element={<Wall />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
        <Route path='/wall/post' element={<PostPage />}></Route>
        <Route path='/wall/modify' element={<ModifyPage />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);