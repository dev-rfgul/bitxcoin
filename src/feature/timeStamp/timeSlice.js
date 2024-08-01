

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
//         countdown: {
//             min: 59,
//             sec: 60,
//         },
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
//         updateCountdown: (state, action) => {
//             state.countdown.min = action.payload.min;
//             state.countdown.sec = action.payload.sec;
//             state.countdown.msg = action.payload.msg;
//         },
        
//     },
// });

// export const { addTimeStamp, updateCountdown } = timeStampSlice.actions;

// export default timeStampSlice.reducer;




import { createSlice, nanoid } from "@reduxjs/toolkit";

// Function to load state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("timeStampState");
        if (serializedState === null) {
            return undefined;
        }
        console.log("Loaded state from localStorage:", JSON.parse(serializedState));
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Could not load state", err);
        return undefined;
    }
};

// Function to save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("timeStampState", serializedState);
        // console.log("Saved state to localStorage:", state);
    } catch (err) {
        console.error("Could not save state", err);
    }
};

const persistedState = loadState();

export const timeStampSlice = createSlice({
    name: "timeStamp",
    initialState: persistedState || {
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
            endTime: Date.now() + 60 * 60 * 1000, // default to 1 hour from now
            msg: ""
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
            saveState(state); // Save to localStorage
            // console.log("addTimeStamp", timeStamp);
        },
        updateCountdown: (state, action) => {
            state.countdown.min = action.payload.min;
            state.countdown.sec = action.payload.sec;
            state.countdown.msg = action.payload.msg;
            saveState(state); // Save to localStorage
            // console.log("updateCountdown", state.countdown.min, state.countdown.sec);
        },
        setEndTime: (state, action) => {
            state.countdown.endTime = action.payload;
            saveState(state); // Save to localStorage
            console.log("setEndTime", state.countdown.endTime);
        },
    },
});

export const { addTimeStamp, updateCountdown, setEndTime } = timeStampSlice.actions;

export default timeStampSlice.reducer;
