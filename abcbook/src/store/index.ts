import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login';
import usersReducer from './users';

const store = configureStore({
    reducer: {
        login: loginReducer,
        user: usersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
