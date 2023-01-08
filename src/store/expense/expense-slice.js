const {createSlice} =require("@reduxjs/toolkit")

export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
            expenseList:[
                {name:'Apple', price:88.90}, 
                {name:'Mango', price:87.60}
            ]
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
