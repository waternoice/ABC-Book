import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Books from './pages/Books';
import Users from './pages/Users';
import Analyse from './pages/Analyse';
import Header from './components/layout/Header';
import Login from './pages/Login';
import MenuBar from './components/layout/MenuBar';
import { useAppSelector } from './store/hooks';
import Protected from './services/Protected';
import Public from './services/Public';
import Usertest from './pages/Usertest';

function App() {
    const isLogin = useAppSelector((state: any) => state.login.isAuthenticated);
    return (
        <BrowserRouter>
            <Header />
            {isLogin && <MenuBar />}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Public isLoggedIn={isLogin}>
                            <Login />
                        </Public>
                    }
                />
                <Route
                    path="/books"
                    element={
                        <Protected isLoggedIn={isLogin}>
                            <Books />
                        </Protected>
                    }
                />
                <Route
                    path="/users"
                    element={
                        <Protected isLoggedIn={isLogin}>
                            <Users />
                        </Protected>
                    }
                />
                <Route
                    path="/analyse"
                    element={
                        <Protected isLoggedIn={isLogin}>
                            <Analyse />
                        </Protected>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
