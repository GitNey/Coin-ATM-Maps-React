import { PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from '../initialState/interfaces/counter';

export const _increment = (state: CounterState) => {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    state.value += 1;
};

export const _decrement = (state: CounterState) => {
    state.value -= 1;
};

// Use the PayloadAction type to declare the contents of `action.payload`
export const _incrementByAmount = (state: CounterState, action: PayloadAction<number>) => {
    state.value += action.payload;
};
