import { Button, Heading } from '@chakra-ui/react';
import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { loginActions } from '../../store/login';

const Books = () => {
    const isLogin = useSelector((state: any) => state.login.isAuthenticated);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(loginActions.logout());
    };
    return (
        <div className={classes.headerContainer}>
            <Heading color="teal" size="lg">
                ABC-Book
            </Heading>
            {isLogin && (
                <div>
                    <Button onClick={logoutHandler}>Logout</Button>
                </div>
            )}
        </div>
    );
};

export default Books;
