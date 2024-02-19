import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobCount: 0,
    jobs: []
}

export const dataTransferJobsSlice = createSlice({
    name: 'dataTransferJobs',
    initialState,
    reducers: {
        addJob: (state, action) => void(state.jobs.push(action.payload)),
        executeJob: (state, action) => {
            let job = state.jobs.filter(j => j.id === action.payload.id);
            job && (job.executed = !job.executed);
        },
        removeJob: (state, action) => {
            let job = state.jobs.filter(j => j.id == action.payload.id);
            console.log(`jobs in reducer : ${state.jobs}`)
            const index = state.jobs.indexOf(job);
            console.log(`index : ${index}`)
            if(index > -1) {
                state.jobs = state.jobs.splice(index, 1);
            }
        }
    }
});

export const { addJob, executeJob, removeJob } = dataTransferJobsSlice.actions;
export default dataTransferJobsSlice.reducer;