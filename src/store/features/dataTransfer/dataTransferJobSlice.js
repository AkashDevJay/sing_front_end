import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    jobCount: 0,
    jobs: []
}

export const dataTransferJobsSlice = createSlice({
    name: 'dataTransferJobs',
    initialState,
    reducers: {
        addJob: (state, action) => {
            state.jobs.push(action.payload);
            state.jobCount++;   
        },
        executeJob: (state, action) => {
            let job = state.jobs.filter(j => j.id === action.payload.id);
            job && (job.executed = !job.executed);
        },
        removeJob: (state, action) => {
            console.log(current(state));
            let job = current(state).jobs.find(j => j.id == action.payload.id);
            let index = current(state).jobs.indexOf(job);
            state.jobs.splice(index, 1);
        }
    }
});

export const { addJob, executeJob, removeJob } = dataTransferJobsSlice.actions;
export default dataTransferJobsSlice.reducer;