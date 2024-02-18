import { configureStore } from "@reduxjs/toolkit";
import dataTransferJobsReducer from './features/dataTransfer/dataTransferJobSlice';

export const store = configureStore({
    reducer: {
        dataTransferJobs: dataTransferJobsReducer
    },
});