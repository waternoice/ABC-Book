import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
                dateJoined: newUser.dateJoined,
                password: newUser.password
            });
        },
        deleteUser(state, action) {
            const id = action.payload;
            state.users = state.users.filter((user) => user.id !== id);
        },
        updateUser(state, action) {
            const newValue = action.payload;
            const objIndex = state.users.findIndex((user) => user.id === newValue.id);

            // make new object of updated object.
            const updatedObj = {
                ...state.users[objIndex],
                id: newValue.id,
                role: newValue.role,
                username: newValue.username,
                email: newValue.email,
                dateJoined: newValue.dateJoined,
                password: newValue.password
            };

            // make final new array of objects by combining updated object.
            state.users = [
                ...state.users.slice(0, objIndex),
                updatedObj,
                ...state.users.slice(objIndex + 1)
            ];
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'success';
            // Add any fetched posts to the array
            state.users = state.users.concat(action.payload);
        });
    }
});

export const usersActions = usersSlice.actions;
export default usersSlice.reducer;
