// import { configureStore } from "@reduxjs/toolkit";
// import { todoSlice } from "../reducers/todoSlice";

import { configureStore } from "@reduxjs/toolkit";


// export const store = configureStore({
//   reducer:{
//   todo: todoSlice
//   }
// })

// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../reducers/todoSlice"



// export const store = configureStore({
//     reducer: {
//         todos: todoReducer,
//     }
// })


























import todoReducer from '../reducers/todoSlice'



export const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
})