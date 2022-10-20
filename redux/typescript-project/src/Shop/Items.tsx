import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { shopActions } from '../store/shopReducer';

const DUMMY_ITEMS = [
    {
        name: '가지',
        price: 2500,
        description: '신선한 가지',
        id: 22,
    },
    {
        name: '오이',
        price: 1500,
        description: '아삭한 오이',
        id: 11,
    },
];

function Items() {
    const dispatch = useDispatch();
    const addToCartHandler = (id: number, title: string, price: number) => {
        dispatch(shopActions.addItemToCart({ id, title, price }));
    };
    return (
        <>
            {DUMMY_ITEMS.map((item: any) => {
                return (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: '10px',
                        }}
                    >
                        <Paper>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ margin: '10px' }}>
                                    {item.name}
                                </Typography>
                                <Box
                                    sx={{
                                        margin: '1rem',
                                        backgroundColor: 'black',
                                        borderRadius: '20px',
                                        width: '60px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography
                                        style={{
                                            color: 'white',
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            padding: '4px',
                                        }}
                                    >
                                        {item.price}₩
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography sx={{ margin: '10px' }}>
                                {item.description}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    onClick={() => {
                                        addToCartHandler(
                                            item.id,
                                            item.name,
                                            item.price
                                        );
                                    }}
                                >
                                    카트에 추가하기
                                </Button>
                            </Box>
                        </Paper>
                    </Box>
                );
            })}
        </>
    );
}
export default Items;
