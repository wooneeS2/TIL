import { createSlice } from '@reduxjs/toolkit';

type initialType = {
    items: exisitingItemType[];
    totalAmount: number;
};

export type exisitingItemType = {
    name: string;
    id: number;
    amount: number;
    totalPrice: number;
    price: number;
};

const initialValue: initialType = {
    items: [],
    totalAmount: 0,
};

const shopReducer = createSlice({
    name: 'shop',
    initialState: initialValue,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const exisitingItem = state.items.find(
                item => item.id === newItem.id
            );
            console.log(newItem);
            state.totalAmount++;
            if (!exisitingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    amount: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                exisitingItem.amount++;
                exisitingItem.totalPrice =
                    exisitingItem.totalPrice + newItem.price;
            }
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const exisitingItem = state.items.find(item => item.id === id);
            state.totalAmount--;
            console.log(id);
            if (exisitingItem?.amount === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                //FIXME : 여기서 왜 exisitingItem이 왜 undefined일수도 있는가??
                //위에서는 잘 동작하는데 아래에서만 안되는 이유가 무엇일지...
                // exisitingItem.amount--;
            }
        },
    },
});

export const shopActions = shopReducer.actions;
export default shopReducer;
