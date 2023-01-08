const {createSlice} =require("@reduxjs/toolkit")
export const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
            expenseList:[
                {name:'Apple', price:88.90}, 
                {name:'Mango', price:87.60}
            ]
    },
    
})