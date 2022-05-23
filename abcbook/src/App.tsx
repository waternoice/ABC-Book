import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import Users from './pages/Users';
import Analyse from './pages/Analyse';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/books" element={<Books />} />
                <Route path="/users" element={<Users />} />
                <Route path="/analyse" element={<Analyse />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
