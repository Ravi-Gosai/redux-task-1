
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter : 0,
    showCounter : true
}

export const counterSlice = createSlice({
    name :'counter',
    initialState,
    reducers :{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
            state.counter += action.payload
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }

    }
})

export const {increment, decrement , increase, toggle} = counterSlice.actions

export default counterSlice.reducer


// // import {createStore } from "redux";

// const instialState = {counter : 0, showCounter : true}

// const counterReducer = (state=instialState,action)=>{

//     if(action.type === 'increment'){
//         return {counter : state.counter + 1 , showCounter : state.showCounter}
//     }
//     if(action.type === 'decrement'){
//         return {counter : state.counter - 1, showCounter : state.showCounter}
//     }
//     if(action.type === 'increase'){
//         return {counter : state.counter + action.amount, showCounter : state.showCounter}
//     }
//     if(action.type === 'toggle'){
//         return {counter : state.counter , showCounter : !state.showCounter}
//     }
//     return state
// }
// const store = createStore(counterReducer)

// export default store