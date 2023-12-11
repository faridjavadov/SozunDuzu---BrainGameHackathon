import { createStore } from "redux";
import {configureStore, } from "@reduxjs/toolkit";
import WordSlicer from "../slicers/WordSlicer";
import WordLevelSlicers from "../slicers/WordLevelSlicers";
import MoneySlicer from "../slicers/MoneySlicer";



export const store = configureStore({
    reducer:{
      WordSlicer:WordSlicer,
      WordLevelSlicers:WordLevelSlicers,
      MoneySlicer:MoneySlicer
    }
})
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>