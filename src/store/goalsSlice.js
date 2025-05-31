import { createSlice } from '@reduxjs/toolkit'

export const goalSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [],
    },
    reducers: {
        addGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
            fetch('http://localhost:3000/goals/addGoal',{
                method: "POST",
                headers:{
                  "Content-Type": "application/json",
                  "Authorization": "123"
                },
                body: JSON.stringify(action.payload)
              }).catch((err)=>{
                  console.log(err);
              });
        },
        initAddGoal: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload)
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter((goal)=>goal._id !== action.payload);
            fetch('http://localhost:3000/goals/deleteGoal/' + action.payload,{
                method: "DELETE",
                headers:{
                  "Content-Type": "application/json",
                  "Authorization": "123"
                }
              }).catch((err)=>{
                  console.log(err);
              });
        }
    }
})

export const { addGoal, initAddGoal, removeGoal } =  goalSlice.actions
export const selectGoals = (state) => state.goals.value

export default goalSlice.reducer