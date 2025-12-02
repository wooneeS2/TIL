import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import React from 'react';
import { useSelector } from 'react-redux';
import { exisitingItemType, shopActions } from '../store/shopReducer';
import { useDispatch } from 'react-redux';

function Cart() {
    const dispatch = useDispatch();
    const items: exisitingItemType[] = useSelector(
        (state: any) => state.shop.items
    );
    const totalAmount = useSelector((state: any) => state.shop.totalAmount);

    const removeItemHandler = (id: number) => {
        dispatch(shopActions.removeItemFromCart(id));
    };

    const addItemHandler = (id: number, title: string, price: number) => {
        dispatch(shopActions.addItemToCart({ id, title, price }));
    };

    return (
        <>
            <p>장바구니 목록</p>
            {items.map((item: exisitingItemType) => {
                return (
                    <Box sx={{ backgroundColor: '#fff000' }}>
                        <Paper>
                            <p>{item.name}</p>
                            <p>{item.totalPrice}₩</p>
                            <p>x{item.amount}</p>
                            <Button
                                variant="contained"
                                sx={{ margin: '4px' }}
                                onClick={() => {
                                    addItemHandler(
                                        item.id,
                                        item.name,
                                        item.price
                                    );
                                }}
                            >
                                +
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ margin: '4px' }}
                                onClick={() => {
                                    removeItemHandler(item.id);
                                }}
                            >
                                -
                            </Button>
                        </Paper>
                    </Box>
                );
            })}
            총 {totalAmount}개
        </>
    );
}

export default Cart;
