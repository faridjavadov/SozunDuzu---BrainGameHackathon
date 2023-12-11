import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface MoneyState {
    money: any,
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: any
}

const initialState: MoneyState = {
    money: 20,
    status: 'idle',
    error: null
}

export const setMoneyAsync = createAsyncThunk(
    'WordSlice/setMoneyAsync',
    async (amount: number, { dispatch }) => {
        try {
            await AsyncStorage.setItem('money', JSON.stringify(amount));

            dispatch(setMoney(amount));

            return amount;
        } catch (error) {
            throw error;
        }
    }
);

const WordSlice = createSlice({
    name: 'WordSlice',
    initialState: initialState,
    reducers: {
        setMoney: (state, action) => {
            state.money += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setMoneyAsync.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(setMoneyAsync.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.money = action.payload;
        });
        builder.addCase(setMoneyAsync.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        });
    },
});

export default WordSlice.reducer;

export const { setMoney } = WordSlice.actions;
