import { createSlice } from '@reduxjs/toolkit';

const uiReducer = createSlice({
    name: 'cartVisible',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
    },
});

export const uiActions = uiReducer.actions;

export default uiReducer;
