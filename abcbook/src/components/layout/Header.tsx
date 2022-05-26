import { Button, Heading } from '@chakra-ui/react';
import classes from './Header.module.css';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { loginActions } from '../../store/login';
import { RootState } from '../../store';
import AuthService from '../../services/auth.service';

const Books = () => {
    const isLogin = useAppSelector((state: RootState) => state.login.isAuthenticated);
    const dispatch = useAppDispatch();
    const logoutHandler = () => {
        AuthService.logout();
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
