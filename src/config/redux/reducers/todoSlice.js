// main.jsx mey ja kar apni App.jsx ko provider tag key darmiaan rakho tabhi react redux run karey gee

// sab sey pehlay ap rafce kar key fnc bannao os key baad ap react redux ka aike hook use karo creatSlice({andar object ho })  os key baad ap name define karo gey osey key baad do object do gey aike simple object jes mey initile state hoga jo key ap key collection kei  key key anada aike array lay ga jes mey ham push karen gey value ko or dosra reduser ye app key es initile state key liye functionlized karey ga os key baad apkey  key object export hon gey
// import { createSlice, nanoid } from "@reduxjs/toolkit";




// export const todoSlice = createSlice({


//     name: "my application",

//     initialState: {
//         todoApp: []
//     },
//     reducers: {
//         addTodo: (state, action) => {
//             state.todoApp.push({
//                 todoValue: "hello"
//                 , id: nanoid()
//             })
//         },
//         removeTodo: (state, action) => {
//             console.log(action)
//         }
//     }

// })

// // console.log(todoApllication)

// export const { addTodo, removeTodo } = todoSlice.actions
// export default todoSlice.reducer

// todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "Todos",
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            });
        },
        removeTodo: (state, action) => {
            state.todo.splice(action.payload.index, 1);
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer; // یہ درست ہے


