import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        currentAmount: 5000,
        betAmount: 0,
        selectedOption: "",
    },
    result: {
        dice1: 0,
        dice2: 0,
        sum: 0
    }
}

export const gameSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        handleOption: (state, action) => {
            const { name, value } = action.payload;
            if (name == "select-amount") {
                state.userData.betAmount = parseInt(value)
            } else {
                state.userData.selectedOption = value
            }
        },
        rollDice: (state, action) => {
            const { dice1, dice2, sum } = action.payload;
            state.result.dice1 = dice1;
            state.result.dice2 = dice2;
            state.result.sum = sum;
        },
        CheckWinOrLose: (state, action) => {
            const { win, payoutMultiplier } = action.payload;
            state.result.win = win;
            state.payoutMultiplier = payoutMultiplier;
        },
        updateCurrentAmount: (state, action) => {
            const newAmount = action.payload;
            state.userData.currentAmount = newAmount;
        }

    }
})

export const { handleOption, rollDice, CheckWinOrLose, updateCurrentAmount } = gameSlice.actions; //reducers to components

export default gameSlice.reducer //for store 