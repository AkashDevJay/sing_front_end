import React, { useState } from "react";
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { addJob } from "../store/features/dataTransfer/dataTransferJobSlice";

export function SelectorDropdown () {

    const jobs = useSelector((state) => state.dataTransferJobs);
    const dispatch = useDispatch();

    const [source, setSource] = useState('GET');
    const [target, setTarget] = useState('AWS-S3');

    const handleSourceChange = (event) => {
        setSource(event.target.value);
    }

    const handleTargetChange = (event) => {
        setTarget(event.target.value);
    }

    const createWorkplace = () => {
        dispatch(addJob({
            id: jobs.jobCount + 1,
            source,
            target,
            executed: false
        }))
    }

    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Select
                    labelId="source-label"
                    id="source-select"
                    value={source}
                    label="Source"
                    onChange={handleSourceChange}
                >
                    <MenuItem value={'GET'}>{'API (GET)'}</MenuItem>
                    <MenuItem value={'POST'}>{'API (POST)'}</MenuItem>
                    <MenuItem value={'PUT'}>{'API (PUT)'}</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12}>
                <Select
                    labelId="target-label"
                    id="target-select"
                    value={target}
                    label="target"
                    onChange={handleTargetChange}
                >
                    <MenuItem value={'AWS-S3'}>{'AWS S3 File Writer'}</MenuItem>
                    <MenuItem value={'POST'}>{'Option 2'}</MenuItem>
                    <MenuItem value={'PUT'}>{'Option 3'}</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={createWorkplace} disabled={!source || !target}> Create Workplace </Button>
            </Grid>
        </Grid>
        </>
    )
}