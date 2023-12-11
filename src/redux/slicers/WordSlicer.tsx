import { createSlice } from "@reduxjs/toolkit"
import { words } from "../../data/Mode1Words"

interface WordState {
    word: any,
    status: 'pending' | 'fulfilled' | 'rejected' | null,
    error: any
}

const initialState: WordState = {
    word: [],
    status: null,
    error: null
}

const WordSlice = createSlice({
    name: 'WordSlice',
    initialState: initialState,
    reducers: {
        setWord:(state,action)=>{
            state.word = action.payload
            
        },
        setRevealed:(state,action)=>{
                        
            const letter = state.word.find((c:any)=>c.id == action.payload)            
            letter.isRevealed = true            
        }

      
    },
})

export default WordSlice.reducer

export const {setWord,setRevealed} = WordSlice.actions