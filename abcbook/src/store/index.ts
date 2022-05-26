import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login';
import usersReducer from './users';
import booksReducer from './books';

const store = configureStore({
    reducer: {
        login: loginReducer,
        user: usersReducer,
        book: booksReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
