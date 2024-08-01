// import { createSlice, nanoid } from "@reduxjs/toolkit";

// export const timeStampSlice = createSlice({
//     name: "timeStamp",
//     initialState: {
//         timeStamps: [
//             {
//                 id: 1,
//                 hour: "00 :",
//                 min: "00 :",
//                 sec: "00 ",
//             },
//         ],
//     },
//     reducers: {
//         addTimeStamp: (state, action) => {
//             const timeStamp = {
//                 id: nanoid(),
//                 hour: action.payload.hour,
//                 min: action.payload.min,
//                 sec: action.payload.sec,
//             };
//             state.timeStamps = [timeStamp];
//             console.log(timeStamp);
//         },
//         countdown: (state, action) => {
//             const countdown = {
//                 id: nanoid(),
//                 min: "59:",
//                 sec: "60",
//             };
//             console.log(countdown);
//         },
//     },
// });

// export const { addTimeStamp,countdown } = timeStampSlice.actions;

// export default timeStampSlice.reducer;




import { createSlice, nanoid } from "@reduxjs/toolkit";

export const timeStampSlice = createSlice({
    name: "timeStamp",
    initialState: {
        timeStamps: [
            {
                id: 1,
                hour: "00 :",
                min: "00 :",
                sec: "00 ",
            },
        ],
        countdown: {
            min: 59,
            sec: 60,
        },
    },
    reducers: {
        addTimeStamp: (state, action) => {
            const timeStamp = {
                id: nanoid(),
                hour: action.payload.hour,
                min: action.payload.min,
                sec: action.payload.sec,
            };
            state.timeStamps = [timeStamp];
            console.log(timeStamp);
        },
        updateCountdown: (state, action) => {
            state.countdown.min = action.payload.min;
            state.countdown.sec = action.payload.sec;
        },
    },
});

export const { addTimeStamp, updateCountdown } = timeStampSlice.actions;

export default timeStampSlice.reducer;
