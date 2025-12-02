import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

//리덕스 툴킷의 createSlice는 리듀서를 만들기 쉽게 해줌
//값을 자동으로 복사해와서 값을 계속해서 넣어줄 필요가 없음.
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            //리덕스 툴킷의 createSlice는 모든 상태를 변경하지 않게하고 복제함.
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            //액션에 ()속에 들어오는걸 payload라함.
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
