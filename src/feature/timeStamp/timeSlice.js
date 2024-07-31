import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    timeStamps: [
        {
            id: 1,
            time: "00:00:00:000",
        },
    ],
};

export const timeStampSlice = createSlice({
    name: "timeStamp",
    initialState,
    reducers: {
        addTimeStamp: (state, action) => {
            const timeStamp = {
                id: nanoid(),
                time: action.payload,
            };
            state.timeStamps.push(timeStamp);
        },
  
    },

});

export const {addTimeStamp} = timeStampSlice.actions;

export default timeStampSlice.reducer;  
