const {createSlice} =require("@reduxjs/toolkit")

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
            expenseList:[]
    },
    reducers: {
        addExpenseAction: (currentsLice, action)=> {
            console.log("action", action);
            //currentsLice.expenseList.push({name:"Orange", price:456.90}) // works, but we hate to do dynamically, a we did bellow
            currentsLice.expenseList.push(action.payload)
        }
    }
})

export const {addExpenseAction} = expenseSlice.actions
