import { createSlice } from "@reduxjs/toolkit"
import { words } from "../../data/Mode1Words"
import { mode1levels } from "../../data/Mode1Levels"

interface WordLevelState {
    levels: any,
    data:any,
    stars: any,
    status: 'pending' | 'fulfilled' | 'rejected' | null,
    error: any
}

const initialState: WordLevelState = {
    levels: mode1levels,
    data:words,
    stars: 3,
    status: null,
    error: null
}




const WordLevelSlice = createSlice({
    name: 'WordLevelSlice',
    initialState: initialState,
    reducers: {
        unlockNextLevel: (state, action) => {

            const level = state.levels.find((c: any) => c.id == action.payload)
            level.isUnlocked = true

            
        },
        setData:(state,action)=>{
            state.data = action.payload
            console.log('a',state.data);
            
        },
        finishLevel: (state, action) => {

            const level = state.levels.find((c: any) => c.id == action.payload.id)
            if (action.payload.stars > level.stars) {
                level.stars = action.payload.stars
            }
            state.stars = 3

        },
        handleStar: (state, action) => {
            state.stars = state.stars - action.payload
        },
        resetStar:(state)=>{
            state.stars = 3
        }
    },
})

export default WordLevelSlice.reducer

export const { setData,unlockNextLevel, finishLevel, handleStar ,resetStar} = WordLevelSlice.actions