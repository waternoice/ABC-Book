import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Users from './pages/Users';
import Analyse from './pages/Analyse';
import Header from './components/layout/Header';
import Login from './pages/Login';
import MenuBar from './components/layout/MenuBar';
import { useSelector } from 'react-redux';

function App() {
    const isLogin = useSelector((state: any) => state.login.isAuthenticated);
    return (
        <BrowserRouter>
            <Header />
            {isLogin && <MenuBar />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/books" element={<Books />} />
                <Route path="/users" element={<Users />} />
                <Route path="/analyse" element={<Analyse />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
