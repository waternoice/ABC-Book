import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface bookDetailState {
    books: Array<any>;
    status: 'idle' | 'loading' | 'success' | 'failed';
    error: any;
}

const initialState: bookDetailState = {
    books: [],
    status: 'idle',
    error: null
};

export const fetchBooks = createAsyncThunk('users/fetchBooks', async () => {
    const response = await fetch('mockData/mockBook.json');
    const responseData = await response.json();
    return responseData;
});

const booksSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook(state, action) {
            const newBook = action.payload;
            state.books.push({
                id: newBook.id,
                title: newBook.title,
                description: newBook.description,
                genre: newBook.genre,
                author: newBook.author,
                published: newBook.published,
                availability: newBook.availability,
                lastBorrower: newBook.lastBorrower
            });
        },
        deleteBook(state, action) {
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },
        updateBook(state, action) {
            const newValue = action.payload;
            const objIndex = state.books.findIndex((book) => book.id === newValue.id);

            // make new object of updated object.
            const updatedObj = {
                ...state.books[objIndex],
                id: newValue.id,
                title: newValue.title,
                description: newValue.description,
                genre: newValue.genre,
                author: newValue.author,
                published: newValue.published,
                availability: newValue.availability,
                lastBorrower: newValue.lastBorrower
            };

            // make final new array of objects by combining updated object.
            state.books = [
                ...state.books.slice(0, objIndex),
                updatedObj,
                ...state.books.slice(objIndex + 1)
            ];
        },
        borrowBook(state, action) {
            const { id, username } = action.payload;
            const exisitingItem = state.books.find((book) => book.id === id);
            if (exisitingItem.availability === 0) {
                exisitingItem.availability = 0;
            } else {
                exisitingItem.availability--;
                exisitingItem.lastBorrower = username;
            }
        },
        returnBook(state, action) {
            const id = action.payload;
            const exisitingItem = state.books.find((book) => book.id === id);
            exisitingItem.availability++;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = 'success';
            // Add any fetched posts to the array
            state.books = state.books.concat(action.payload);
        });
    }
});

export const booksActions = booksSlice.actions;
export default booksSlice.reducer;
