import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    timeStamps: [
        {
            id: 1,
            hour: "00 :",
            min:"00 :",
            sec:"00 :",
            milisec:"00",
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
                hour: action.payload.hour,
                min: action.payload.min,
                sec: action.payload.sec,
                milisec: action.payload.milisec,
            };
            state.timeStamps = [timeStamp];
            console.log(timeStamp)
        },
    },
});

export const { addTimeStamp } = timeStampSlice.actions;

export default timeStampSlice.reducer;
