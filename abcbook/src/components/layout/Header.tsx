import React, { useState } from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Books = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isUser, setIsUser] = useState(false);

    if (Math.random() > 0.5) {
        setIsLogin(true);
    }
    if (Math.random() > 0.5) {
        console.log('i am a user');
        setIsUser(true);
    }
    return (
        <div className={classes.headerContainer}>
            <div>ABC-Books</div>

            {isLogin && (
                <div>
                    <Link to="/books" className={classes.headerLinks}>
                        Books
                    </Link>
                    {!isUser && (
                        <Link to="/users" className={classes.headerLinks}>
                            User
                        </Link>
                    )}
                    <Link to="/analyse" className={classes.headerLinks}>
                        Analyse
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Books;
