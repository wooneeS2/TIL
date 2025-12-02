import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopReducer';
import uiReducer from './uiReducer';

const store = configureStore({
    reducer: {
        ui: uiReducer.reducer,
        shop: shopReducer.reducer,
    },
});

export default store;
