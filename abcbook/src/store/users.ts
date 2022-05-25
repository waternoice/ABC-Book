import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../services/auth.service';

export interface userDetailState {
    users: Array<any>;
    status: 'idle' | 'loading' | 'success' | 'failed';
    error: any;
}

const initialState: userDetailState = {
    users: [],
    status: 'idle',
    error: null
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('mockData/mockUser.json');
    const responseData = await response.json();
    return responseData;
});

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action) {
            const newUser = action.payload;
            state.users.push({
                id: newUser.id,
                role: newUser.role,
                username: newUser.username,
                email: newUser.email,
                dataJoined: newUser.dataJoined,
                password: newUser.password
            });
        },
        deleteUser(state, action) {
            const id = action.payload;
            state.users = state.users.filter((user) => user.id === id);
        },
        updateUser(state, action) {}
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
