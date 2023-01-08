//npm i @reduxjs/toolkit@1.8.6 react-redux@8.0.4

import {configureStore} from "@reduxjs/toolkit"
import { expenseSlice } from "./expense/expense-slice"
const store = configureStore({
    reducer:{
        //EXPENSE : ()=> "DATA"//it works already, but we have to use the reducer, as we did below..
        EXPENSE : expenseSlice.reducer
    }
})

export {store}