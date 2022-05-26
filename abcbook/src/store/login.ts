import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface loginState {
    isAuthenticated: boolean;
    username: string;
    role: string;
}

const initialState: loginState = {
    isAuthenticated: false,
    username: '',
    role: ''
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.username = action.payload.username;
            state.role = action.payload.role;
        },
        loginFailed(state) {
            alert('wrong username or password');
        },
        logout(state) {
            state.isAuthenticated = false;
            state.username = '';
            state.role = '';
        }
    }
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
